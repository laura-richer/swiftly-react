# SwiftLY React

A framework for building isomorphic apps with ES6 React, NextJS, Express and Styled Components. Including type checking and code linting with propTypes, ESLint and Stylelint.


## Prerequisites

- [NVM](https://github.com/creationix/nvm) (Mac/Linux)
- [NVM Windows](https://github.com/coreybutler/nvm-windows) (Windows)
- [PM2](http://pm2.keymetrics.io/)


## Recommended

- [Visual Studio Code](https://code.visualstudio.com/)
    - [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Stylelint extension](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
    - [Styled components extension](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)


## Getting started

**Initial configuration**

- Update the browser support list in `.babelrc`.
- Update the app name and add environment variables such as port number in `ecosystem.config.js`.
- Update the name and author in `package.json`.
- Update page meta data in `pages/index.jsx`.
- Update configurable values in `config/constants.js`;


**Preinstall**

Run before installation to install the required Node version. On Windows, append the version number defined in the .nvmrc file to this command.

```sh
nvm install
```

**Development**

Run in a development environment to compile files and launch a live reload Express server.

```sh
nvm use
npm install
npm run development
```

**Production**

Run in a production environment to lint, compile and minify files then launch an Express server with PM2. To run in a staging environment, change the last command to `npm run staging`.

```sh
nvm use
npm install
npm run eslint
npm run stylelint
npm run build
npm run production
```
