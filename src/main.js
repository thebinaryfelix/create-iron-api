import chalk from 'chalk'
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import { promisify } from 'util'
import execa from 'execa'
import Listr from 'listr'
import { projectInstall } from 'pkg-install'

const { URL } = require('url')

const access = promisify(fs.access)
const copy = promisify(ncp)

const initGit = async options => {
  const result = await execa('git', ['init'], {
    cwd: options.targetDirectory,
  })
  if (result.failed) {
    return Promise.reject(new Error('Failed to initialize Git'))
  }
  return false
}

const copyTemplateFiles = async options =>
  copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  })

const createProject = async options => {
  const projectOptions = {
    ...options,
    targetDirectory: `${options.targetDirectory || process.cwd()}/${options.projectName}`,
  }

  const currentFileUrl = import.meta.url
  const templateDir = path.resolve(new URL(currentFileUrl).pathname, '../../template/iron-api')
  projectOptions.templateDirectory = templateDir

  try {
    await access(templateDir, fs.constants.R_OK)
    try {
      await access(projectOptions.targetDirectory, fs.constants.R_OK)
      process.stdout.write('Folder already exists! You must choose another name\n')
      process.exit(1)
    } catch (err) {
      process.stdout.write(
        `${chalk.blueBright.bold('Project folder:')}${projectOptions.targetDirectory}\n`,
      )
    }
  } catch (err) {
    process.stdout.write(`${chalk.red.bold('ERROR')} Invalid template name\n`)
    process.exit(1)
  }

  const tasks = new Listr([
    {
      title: 'Copy project files',
      task: () => copyTemplateFiles(projectOptions),
    },
    {
      title: 'Initialize git',
      task: () => initGit(projectOptions),
      enabled: () => projectOptions.git,
    },
    {
      title: 'Install dependencies',
      task: () =>
        projectInstall({
          cwd: projectOptions.targetDirectory,
        }),
      skip: () =>
        !projectOptions.runInstall
          ? 'Pass --install to automatically install dependencies'
          : undefined,
    },
  ])

  await tasks.run()

  process.stdout.write(`${chalk.green.bold('DONE')} Project ready\n`)

  return true
}

export default createProject
