# VENKATASUDHA

<!-- Dashboard Shields -->

[![GitHub Workflow Status (branch)][dev-workflow-shield]][dev-workflow-url]
[![Coveralls][coveralls-shield]][coveralls-url]
[![GitHub][license-shield]][license-url]
[![Website][portfolio-shield]][portfolio-url]
![GitHub code size in bytes][codesize-shield]
![Lines of code][codelines-shield]

venkatasudha is a mono repository that contains all javascript and typescript based web applications and libraries.

## Applications Included

- **_core-components-e2e(packages/apps/core-components-e2e)_** - Cypress bases end to end testing application for `core-components` library

- **_portfolio-client(packages/apps/portfolio-client)_** - Next JS based PWA web UI for user portfolio

- **_portfolio-client-e2e(packages/apps/portfolio-client-e2e)_** - Cypress bases end to end testing application for `portfolio-client` library

- **_portfolio-server(packages/apps/portfolio-server)_** - Nest JS based GraphQL server to provide data to be displayed by `portfolio-client`

[Back to Top](#venkatasudha)

## Libraries Included

- [![GitHub package.json version (subfolder of monorepo)][core-shield]][core-url] **_core(packages/libs/core)_** - pure typescript based library that includes all utility functions that other libraries or applications might use.
- [![GitHub package.json version (subfolder of monorepo)][corecomponents-shield]][corecomponents-url]**_core-components(packages/libs/core-components)_** - React based components library that Next or React based clients can use.

- [![GitHub package.json version (subfolder of monorepo)][portfoliocore-shield]][portfoliocore-url]**_portfolio-core(packages/libs/portfolio-core)_** - pure typescript based library that includes all util functions and entities required specifically for portfolio frontend and backend (UI and server)

- [![GitHub package.json version (subfolder of monorepo)][tailwindcss-shield]][tailwindcss-url]
  **_tailwindcss(packages/libs/tailwindcss)_** - tailwind library that includes common preset and css file that UI applications or libraries can use for design.

[Back to Top](#venkatasudha)

## Scripts

- `clean` - removes all build, coverage, cypress and temporory files

- `validate:push` - runs all required scripts to check if github workflow would pass before pushing commit to remote url

- `build:all` - runs build script on all affected components

- `lint:all` - runs lint script on all affected components

- `test:all` - runs unit test on all affected components

- `e2e:all` - runs e2e tests on all affected components

- `serve:portfolio` - script to build and serve production based next application

- `upgrade:nx` - script to upgrade all nx depedencies to latest version. This upgrades to latest version, runs required migrations and performs cleanup.

> NOTE: All `nx` affected script above are based of `dev` branch by default, If you would like to change this update `affected/defaultBase` property within `nx.json` file.

[Back to Top](#venkatasudha)

## Projects Dependency Graph

![Projects Dependency Graph](docs/images/projects_graph.png)

[Back to Top](#venkatasudha)

## Portfolio Load Metrics

### Default Response Time

![][portfolio-default-checkly-shield]

### Response Time with Fast 3g Tottle

![][portfolio-fast3g-checkly-shield]

### Response Time with Slow 3g Tottle

![][portfolio-slow3g-checkly-shield]

> Note: Download, Upload and Latency throttle values are referred from [chromedevtoools][throttle-values-url]

[Back to Top](#venkatasudha)

## Dependency Versions

Dependencies and their specific versions used in this repo are listed below.

![GitHub package.json dependency version (prod)][nestjs-common-shield]
![GitHub package.json dependency version (prod)][nestjs-core-shield]
![GitHub package.json dependency version (prod)][nestjs-platform-express-shield]
![GitHub package.json dependency version (prod)][classnames-shield]
![GitHub package.json dependency version (prod)][corejs-shield]
![GitHub package.json dependency version (prod)][framer-motion-shield]
![GitHub package.json dependency version (prod)][next-shield]
![GitHub package.json dependency version (prod)][next-pwa-shield]
![GitHub package.json dependency version (prod)][react-shield]
![GitHub package.json dependency version (prod)][react-dom-shield]
![GitHub package.json dependency version (prod)][react-icons-shield]
![GitHub package.json dependency version (prod)][react-router-dom-shield]
![GitHub package.json dependency version (prod)][react-use-shield]
![GitHub package.json dependency version (prod)][reflect-metadata-shield]
![GitHub package.json dependency version (prod)][regenerator-runtime-shield]
![GitHub package.json dependency version (prod)][tslib-shield]

[Back to Top](#venkatasudha)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

<!-- Shields Start -->

[dev-workflow-shield]: https://img.shields.io/github/workflow/status/kanakamedala-rajesh/venkatasudha/CI%20Build/dev?style=for-the-badge
[coveralls-shield]: https://img.shields.io/coveralls/github/kanakamedala-rajesh/venkatasudha?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/kanakamedala-rajesh/venkatasudha?style=for-the-badge
[portfolio-shield]: https://img.shields.io/website?down_color=red&down_message=offline&label=Portfolio%20website&logo=portfolio-webite-status&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fportfolio.venkatasudha.com%2F
[codesize-shield]: https://img.shields.io/github/languages/code-size/kanakamedala-rajesh/venkatasudha?style=for-the-badge
[codelines-shield]: https://img.shields.io/tokei/lines/github/kanakamedala-rajesh/venkatasudha?style=for-the-badge

<!-- Repository Library Shields -->

[core-shield]: https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Fcore%2Fpackage.json&style=flat-square
[corecomponents-shield]: https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Fcore-components%2Fpackage.json&style=flat-square
[portfoliocore-shield]: https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Fportfolio-core%2Fpackage.json&style=flat-square
[tailwindcss-shield]: https://img.shields.io/github/package-json/v/kanakamedala-rajesh/venkatasudha?filename=packages%2Flibs%2Ftailwindcss%2Fpackage.json&style=flat-square

<!-- Checkly Shields -->

[portfolio-default-checkly-shield]: https://api.checklyhq.com/v1/badges/checks/ed3480f7-bfca-4828-9b07-e3077c401392?style=for-the-badge&theme=default&responseTime=true
[portfolio-fast3g-checkly-shield]: https://api.checklyhq.com/v1/badges/checks/29d7f07b-11c2-4166-bef8-6a1aa654a207?style=for-the-badge&theme=default&responseTime=true
[portfolio-slow3g-checkly-shield]: https://api.checklyhq.com/v1/badges/checks/1152ae13-caf0-4b4c-8cb7-083ebecbaeb9?style=for-the-badge&theme=default&responseTime=true

<!-- Dependency Shields -->

[nestjs-common-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/@nestjs/common
[nestjs-core-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/@nestjs/core
[nestjs-platform-express-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/@nestjs/platform-express
[classnames-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/classnames
[corejs-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/core-js
[framer-motion-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/framer-motion
[next-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/next
[next-pwa-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/next-pwa
[react-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react
[react-dom-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-dom
[react-icons-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-icons
[react-router-dom-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-router-dom
[react-use-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/react-use
[reflect-metadata-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/reflect-metadata
[regenerator-runtime-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/regenerator-runtime
[tslib-shield]: https://img.shields.io/github/package-json/dependency-version/kanakamedala-rajesh/venkatasudha/tslib

<!-- Shields End -->

<!-- URLs Start -->

[dev-workflow-url]: https://github.com/kanakamedala-rajesh/venkatasudha/actions/workflows/dev_build.yml
[coveralls-url]: https://coveralls.io/github/kanakamedala-rajesh/venkatasudha
[license-url]: https://github.com/kanakamedala-rajesh/venkatasudha/blob/dev/LICENSE
[portfolio-url]: https://portfolio.venkatasudha.com

<!-- Repository Libraries URL's -->

[core-url]: https://github.com/kanakamedala-rajesh/venkatasudha/tree/dev/packages/libs/core
[corecomponents-url]: https://github.com/kanakamedala-rajesh/venkatasudha/tree/dev/packages/libs/core-components
[portfoliocore-url]: https://github.com/kanakamedala-rajesh/venkatasudha/tree/dev/packages/libs/portfolio-core
[tailwindcss-url]: https://github.com/kanakamedala-rajesh/venkatasudha/tree/dev/packages/libs/tailwindcss

<!-- Other URLs -->

[throttle-values-url]: https://github.com/ChromeDevTools/devtools-frontend/blob/80c102878fd97a7a696572054007d40560dcdd21/front_end/sdk/NetworkManager.js#L252-L274

<!-- URLs End -->

<!-- Images Start -->

<!-- Images End -->
