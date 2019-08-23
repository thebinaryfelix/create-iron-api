# 📦 create-iron-api

A simple base structure for designing a REST API.

This package creates a simple API demo, using as context an API that serves data about galaxies. If you wish to know more about this demo, you can check it out on [@thebinaryfelix/galaxies-api-demo](https://github.com/thebinaryfelix/galaxies-api-demo).

## ⚙️ **Installation & Usage**

```bash
$ npm init @thebinaryfelix/iron-api
# or
$ npx @thebinaryfelix/create-iron-api
# or
$ npm install -g @thebinaryfelix/create-iron-api
$ create-iron-api
```

## **Quick Start**

Create the project with default name `iron-api` and install dependencies:

```bash
$ create-iron-api --yes --install
```

💡Use a custom folder name and install dependencies manually:

```bash
$ create-iron-api project-name
$ cd project-name
$ npm install
```

## 🚀 Run the created project

On `project-name` root folder

```bash
$ npm start
```

### Open `http://localhost:3000/api-docs` to see API documentation.

# 🔴 Important

For this demo API to work properly, you need [MongoDB Community Edition ^4.2](https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials) running on your machine.

# Command Line Options

This generator can also be configured with the following flags.

```
-g, --git         initialize Git
-i, --install     install dependencies
-y, --yes         skip prompts
```

# 🧩 Project structure

```
iron-api/
├── api
│   ├── config
│   │   ├── swagger.js
│   ├── controllers
│   │   ├── galaxy.controller.js
│   ├── models
│   │   ├── galaxy.model.js
│   │   ├── response.model.js
│   ├── routes
│   │   ├── galaxy.routes.js
│   │   ├── index.js
│   ├── app.js
├── bin
│   ├── www
├── package.json
├── prettier.config.js
├── .prettierignore
├── .eslintrc.js
├── .eslintignore
├── .gitignore
```

## 🏆 References

- [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js) - by [Dominik Kundel](https://github.com/dkundel)
- [express-generator](https://www.npmjs.com/package/express-generator)
- [@thebinaryfelix/galaxies-api-demo](https://github.com/thebinaryfelix/galaxies-api-demo)

# 🚧 Next steps

## 🧪 Tests

- Add unitary tests to:
  - src/
    - [ ] cli.js
    - [ ] main.js
  - template/api
    - [ ] controllers/\*
    - [ ] models/\*
    - [ ] routes/\*
    - [ ] app.js
