# VENKATASUDHA

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/kanakamedala-rajesh/venkatasudha/CI%20Build/dev?style=for-the-badge)
![Coveralls](https://img.shields.io/coveralls/github/kanakamedala-rajesh/venkatasudha?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kanakamedala-rajesh/venkatasudha?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/kanakamedala-rajesh/venkatasudha?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/kanakamedala-rajesh/venkatasudha?style=for-the-badge)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&label=Portfolio%20website&logo=portfolio-webite-status&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fportfolio.venkatasudha.com%2F)

venkatasudha is a mono repository that contains all javascript and typescript based web applications and libraries.

## Applications Included

- **_core-components-e2e(packages/apps/core-components-e2e)_** - Cypress bases end to end testing application for `core-components` library

- **_portfolio-client(packages/apps/portfolio-client)_** - Next JS based PWA web UI for user portfolio

- **_portfolio-client-e2e(packages/apps/portfolio-client-e2e)_** - Cypress bases end to end testing application for `portfolio-client` library

- **_portfolio-server(packages/apps/portfolio-server)_** - Nest JS based GraphQL server to provide data to be displayed by `portfolio-client`

## Libraries Included

- ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Fcore%2Fpackage.json&style=flat-square)
  **_core(packages/libs/core)_** - pure typescript based library that includes all utility functions that other libraries or applications might use.

- ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Fcore-components%2Fpackage.json&style=flat-square) **_core-components(packages/libs/core-components)_** - React based components library that Next or React based clients can use.

- ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Fportfolio-core%2Fpackage.json&style=flat-square) **_portfolio-core(packages/libs/portfolio-core)_** - pure typescript based library that includes all util functions and entities required specifically for portfolio frontend and backend (UI and server)

- ![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Ftailwindcss%2Fpackage.json&style=flat-square)
  **_tailwindcss(packages/libs/tailwindcss)_** - tailwind library that includes common preset and css file that UI applications or libraries can use for design.

## Scripts

- `clean` - removes all build, coverage, cypress and temporory files

- `validate:push` - runs all required scripts to check if github workflow would pass before pushing commit to remote url

- `build:all` - runs build script on all affected components

- `lint:all` - runs lint script on all affected components

- `test:all` - runs unit test on all affected components

- `e2e:all` - runs e2e tests on all affected components

- `serve:portfolio` - script to build and serve production based next application

> NOTE: All `nx` affected script above are based of `dev` branch by default, If you would like to change this update `affected/defaultBase` property within `nx.json` file.

## Projects Dependency Graph

![Projects Dependency Graph](docs/images/projects_graph.png)

## Dependency Versions

Dependencies and their specific versions used in this repo are listed below.

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/@nestjs/common)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/@nestjs/core)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/@nestjs/platform-express)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/classnames)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/core-js)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/framer-motion)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/next)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/next-pwa)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-dom)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-icons)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-router-dom)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-use)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/reflect-metadata)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/regenerator-runtime)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/rxjs)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/tslib)
