# react-npm-module-skeleton
quick starter to start for new React npm module with needed testing tools

# Important
- **don't forget to change the app name, version and author in `package.json` file**

# Imprtant Tools
- React: react here is a peerDependencies which means that it will use the default react used in the project that will import this module
- Babel: module source files will be compiled to ES5
- Jest + enzyme: Unit and Integration Testing tool, a very strong one for testing both UI and functionalities
- Storybook: no need to create another project just to test the UI of the component, check `stories/index.stories.js`

# Scripts
- Run Tests: `npm test`
- Run and Watch Tests: `npm run test:watch`
- Run Storybook: `npm run storybook`
- Build: `npm run build`
- publish to NPM (after you login to npm through terminal): `npm publish`