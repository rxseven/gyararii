# Gyararii

A simple React app for collecting photos.

> Gyararii or ギャラリー literally means “Gallery” in Japanese.

## Table of Contents

### Getting Started

- [Live Demo](#live-demo)
- [Configuring the Development Environment](#configuring-the-development-environment)

### Specifications

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Development Workflow](#development-workflow)
- [Third-party Services](#third-party-services)
- [Browser Support](#browser-support)

## Live Demo

**Gyararii** is running on **Heroku** at [https://gyararii.herokuapp.com](https://gyararii.herokuapp.com)

> **App sleeping...** as Gyararii and its API run on [Heroku’s free plan](https://www.heroku.com/free), when an app on Heroku has only one web dyno and that dyno doesn’t receive any traffic in 1 hour, the dyno goes to sleep. When someone accesses the app, the dyno manager will automatically wake up the web dyno to run the web process type. **This causes a short delay for this first request**, but subsequent requests will perform normally. For more information, see [App Sleeping on Heroku](https://blog.heroku.com/app_sleeping_on_heroku).

> **Monthly limit** as **Gyararii API** runs on [Cloudinary’s free plan](https://cloudinary.com/pricing), at which point **Gyararii is restricted to transferring data at 25 credits per month**. For more information, see [Cloudinary Plans](https://cloudinary.com/pricing).

[Back to top](#table-of-contents)

## Configuring the Development Environment

### Prerequisites

Before getting started, you are required to have or install the following tools on your machine:

- [Git](https://git-scm.com) _(v2.17.2\*)_
- [GNU Bash](https://www.gnu.org/software/bash/) _(v3.2.57\*)_
- [nvm](https://github.com/creationix/nvm/releases/tag/v0.33.5) _(v0.33.5\*)_ and [Node.js](https://nodejs.org/en/blog/release/v10.15.1/) _(v10.15.1\*)_
- [npm](https://github.com/npm/cli/releases/tag/v6.4.1) _(v6.4.1\*)_ or [Yarn](https://github.com/yarnpkg/yarn/releases/tag/v1.3.2) _(v1.3.2\*)_

Optional, but nice to have:

- [Visual Studio Code](https://code.visualstudio.com)\*\*
- [Google Chrome](https://www.google.com/chrome/)\*\*

> Note: if you are using Mac running [macOS](https://en.wikipedia.org/wiki/MacOS) _(v10.12 Sierra\*)_, you are set with Git and GNU Bash.

> Note: this project has been pre-configured for use with Visual Studio Code.

### Setup

**1.** Clone Gyararii from GitHub repository and change the current working directory:

```sh
git clone https://github.com/rxseven/gyararii.git
cd gyararii
```

**2.** Open the project with your editor of choice or with Visual Studio Code.

**3.** Switch to a specified Node version:

```sh
nvm use
```

### Starting the development server

**1.** Run the development server by running the following command:

```sh
yarn start
```

**2.** Open [http://localhost:3000](http://localhost:3000) to launch the app in the browser.

> Tip: press `control + c` to stop the development server.

### Running Storybook

**1.** Run a UI development environment and playground for UI components with Storybook by running the following command:

```sh
yarn storybook
```

**2.** Open [http://localhost:6006](http://localhost:6006) to launch Storybook in the browser.

> Tip: press `control + c` to stop the server.

### Running tests

Run one of the following commands to run tests with [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/):

```sh
yarn test
yarn test:coverage
yarn test:debug
yarn test:silent
yarn test:staged
yarn test:verbose
```

> Note: by default, when you run test in [watch mode](https://jestjs.io/docs/en/cli.html#watch), Jest will only run the tests related to files changed (modified) since the last commit. This is an optimization designed to make your tests run fast regardless of how many tests in the project you have. However, you can also press `a` in the watch mode to force Jest to run all tests.

> Note: code coverage reports will be generated in the local [`./coverage`](https://jestjs.io/docs/en/configuration#coveragedirectory-string) directory. This directory is listed in [`.gitignore`](https://github.com/rxseven/gyararii/blob/master/.gitignore#L9) file to ensure that it will not be tracked by the source control.

> Tip: press `control + c` to stop the running tests.

### Running JavaScript linting

Run the following command to run JavaScript linting with [ESLint](https://eslint.org/):

```sh
yarn lint:script
```

### Running stylesheet linting

Run the following command to run stylesheet (SCSS) linting with [Stylelint](https://stylelint.io/):

```sh
yarn lint:styles
```

### Running Styled Components linting

Run the following command to run Styled Components linting with [Stylelint](https://stylelint.io/):

```sh
yarn lint:styled
```

### Formatting code

Run the following command to format your code against [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/docs/rules/) rules:

```sh
yarn format
```

### Creating an optimized production build

Run the command below to build the app for production. It correctly bundles the app in production mode and optimizes the build for the best performance. The build will be minified and the filenames include the hashes.

```sh
yarn build
```

> Note: the production build will be created in the local [`./build`](https://facebook.github.io/create-react-app/docs/deployment) directory. This directory is listed in [`.gitignore`](https://github.com/rxseven/gyararii/blob/master/.gitignore#L12) file to ensure that it will not be tracked by the source control.

### Exporting Storybook as a static app

Storybook comes with a tool to export your Storybook into a static web app. Then you can deploy it to any static hosting service. To do so, run the command below to build the static app:

```
yarn build:storybook
```

> Note: the production build will be created in the local [`./storybook-static`](https://storybook.js.org/basics/exporting-storybook/) directory. This directory is listed in [`.gitignore`](https://github.com/rxseven/gyararii/blob/master/.gitignore#L13) file to ensure that it will not be tracked by the source control.

### Analyzing the bundle size

To analyze and debug JavaScript and Sass code bloat through source maps, run the following command to create an optimized production build and start analyzing and debugging the bundle size with [Source Map Explorer](https://github.com/danvk/source-map-explorer):

```sh
yarn build
yarn analyze:bundle:sourcemap
```

Once the analyzing process has finished and the report was generated, you will automatically be redirected to the browser displaying the [treemap visualization](http://evmar.github.io/webtreemap/) of how the space is used in your minified bundle.

### Running the production build locally

**1.** Run the following commands to create an optimized production build and start an HTTP server serving the static app locally:

```sh
yarn build
yarn start:static
```

**2.** Open [http://localhost:8080](http://localhost:8080) in the browser to launch the production app in the browser.

> Tip: press `control + c` to stop the server.

[Back to top](#table-of-contents)

### Running static Storybook app locally

**1.** Run the following commands to create a static Storybook app and start an HTTP server serving the static app locally:

```sh
yarn build:storybook
yarn storybook:static
```

**2.** Open [http://localhost:8081](http://localhost:8081) in the browser to launch the static Storybook app in the browser.

> Tip: press `control + c` to stop the server.

[Back to top](#table-of-contents)

## Features

- View images (masonry and lightbox)
- Upload images
- Delete images

[Back to top](#table-of-contents)

## Technology Stack

Gyararii was built with React and Node.js, one of the most popular stack of technologies for building a modern single-page app.

### Web application

- React, React Router, React Transition Group, React Helmet
- Recompose, Lodash, Ramda, Axios, Yup
- Styled Components, Sass, PostCSS, CSS modules, Bootstrap
- [More...](https://github.com/rxseven/gyararii/blob/master/package.json)

### REST API

- Node.js, Express, and Cloudinary
- Body parser, Path parser, Lodash

[Back to top](#table-of-contents)

## Development Workflow

- Project bootstraping with Create React App
- JavaScript and assets bundling with Webpack
- Development server and live reloading with Webpack DevServer
- JavaScript transpiling with Babel
- CSS-in-JS with Styled Components
- CSS pre-processing and transforming with Sass, PostCSS, and CSS modules
- JavaScript linting with ESLint
- Stylesheet linting with Stylelint
- Code formatting with Prettier
- Automate testing with Jest and Enzyme
- Assets analyzing and debuging with Source Map Explorer
- Type checking with PropTypes
- Code debugging with Visual Studio Code and Chrome Debugger
- Pre-commit hooking with Husky and Lint-staged
- CI/CD with GitHub, Travis CI, and Heroku
- Developing UI components in isolation with Storybook

> Note: the complete guidelines are available in [this project](https://github.com/rxseven/setup-react-app).

[Back to top](#table-of-contents)

## Third-party Services

### Infrastructure

- [Heroku](https://www.heroku.com/) - cloud platform as a service

### Cloud computing and Platforms

- [Cloudinary](https://cloudinary.com/) - end-to-end image management solution

### Software as a Service

- [GitHub](https://github.com/) - web-based hosting service for version control using Git
- [Travis CI](https://travis-ci.org/) - continuous integration

[Back to top](#table-of-contents)

## Browser Support

Because this project uses CSS3 features, it’s only meant for modern browsers. Some browsers currently fail to apply some of the styles correctly.

Chrome and Firefox have full support, but Safari and IE have strange behaviors.

[Back to top](#table-of-contents)

---

\* the minimum required version or higher | \*\* the latest version
