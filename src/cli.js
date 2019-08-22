import arg from 'arg'
import inquirer from 'inquirer'
import createProject from './main'

const parseArgumentsIntoOptions = rawArgs => {
  const args = arg(
    {
      '--git': Boolean,
      '--yes': Boolean,
      '--install': Boolean,
      '-g': '--git',
      '-y': '--yes',
      '-i': '--install',
    },
    {
      argv: rawArgs.slice(2),
    },
  )

  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    projectName: args._[0] || 'iron-api',
    runInstall: args['--install'] || false,
  }
}

const promptForMissingOptions = async options => {
  if (options.skipPrompts) {
    return {
      ...options,
    }
  }

  const questions = []

  if (!options.projectName) {
    questions.push({
      type: 'input',
      name: 'projectName',
      message: 'You should specify a name for your project:',
      default: 'iron-api',
    })
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    projectName: options.projectName || answers.projectName,
    git: options.git || answers.git,
  }
}

export const cli = async args => {
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  await createProject(options)
}

export default cli
