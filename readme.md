# create-iron-api

A simple base structure for designing a REST API.

## **Installation & Usage**

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

```
$ create-iron-api --yes --install
```

Use a custom folder name and install dependencies manually:

```
$ create-iron-api project-name
$ cd project-name
$ npm install
```

# Command Line Options

This generator can also be configured with the following flags.

```
-g, --git         initialize Git
-i, --install     install dependencies
-y, --yes         skip prompts
```

## References
- [How to build a CLI with Node.js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js) - by [Dominik Kundel](https://github.com/dkundel)
- [express-generator](https://www.npmjs.com/package/express-generator)
- [@thebinaryfelix/galaxies-api-demo](https://github.com/thebinaryfelix/galaxies-api-demo)