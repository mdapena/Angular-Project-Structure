<p align="center">
  <img src="./docs/images/angular.png" alt="angular-logo" width="180px" height="180px"/>
  <br>
  <i>A modular/domain driven structure for Angular projects</i>
  <br>
  <br>
  <a href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt" target="_blank"><img src="https://badgen.net/badge/license/MIT/blue" alt="license" /></a>
  <a href="https://www.npmjs.com/@angular/core">
    <img src="https://badgen.net/badge/icon/v15.2.0/green?icon=npm&label" alt="Angular on npm" />
  </a>
  <a href="https://www.github.com/angular/angular" target="_blank"><img src="https://img.shields.io/badge/angular-love-blue?logo=angular&angular=love" alt="angular-love" /></a>
  <br>
  <br>
</p>

# Angular Project Structure

## Description

This project defines a directory structure proposal for Angular applications with a domain and modularity approach. This structure arises from the need to separate the domain/feature layer from Angular's infrastructure concepts. Feel free to design your own structure if these are not suitable.

## Summary

The main idea behind this structure is to create an application context section that groups all domain/feature modules of the app, including a shared module that contains reusable classes and components. All resources that are not bound to the application domain or infrastructure related, such as config and core modules, application bootstrap factories, testing section, and so on, will be located outside of this context.

## Directory Tree Sections

These are the sections that this repository proposes to add to the default structure of an Angular application. See the Directory Structures section for more information.

```bash
src
┣ app
|  ┣ landing
|  |  ┣ pages
|  |  |  ┗ landing-page
|  |  |     ┗ landing-page.component|.html|.scss|.ts
|  |  ┣ landing-routing.module.ts
|  |  ┗ landing.module.ts
|  ┣ shared
|  |  ┗ shared.module.ts
|  ┣ app-routing.module.ts
|  ┗ app.module.ts
|
┣ assets
|  ┗ favicons
|      ┗ favicon.ico
|
┣ config
|  ┣ enums
|  |  ┗ environment.enum.ts
|  ┣ environments
|  |  ┣ environment.devt.ts
|  |  ┗ environment.ts
|  ┣ interfaces
|  |  ┣ config.interface.ts
|  |  ┗ environment.interfaces.ts
|  ┣ services
|  |  ┗ config.service.ts
|  ┣ config.module.ts
|  ┣ envconfig.devt.json
|  ┗ envconfig.prod.json
|
┣ core
|  ┣ guards
|  |  ┗ singleton.guard.ts
|  ┣ layout
|  |  ┗ toolbar
|  |     ┗ toolbar.component|.html|.scss|.ts
|  ┣ pages
|  |  ┗ page-not-found
|  |     ┗ page-not-found.component|.html|.scss|.ts
|  ┗ core.module.ts
|
┣ styles
|  ┗ styles.scss
|
┣ index.html
┣ main-routing.module.ts
┣ main.component.html
┣ main.component.ts
┣ main.module.ts
┗ main.ts
```

```bash
.
┣ src
|   ...
┣ test
|   ┣ app
|   |  ┣ landing
|   |  |  ┣ pages
|   |  |  |  ┗ landing-page.component.spec.ts
|   |  |  ┣ landing-routing.module.spec.ts
|   |  |  ┗ landing.module.spec.ts
|   |  ┣ shared
|   |  |  ┗ shared.module.spec.ts
|   |  ┣ app-routing.module.spec.ts
|   |  ┗ app.module.spec.ts
|   ┣ config
|   |  ┗ config.service.spec.ts
|   ┣ core
|   |  ┣ guards
|   |  |  ┗ singleton.guard.spec.ts
|   |  ┣ layout
|   |  |  ┗ toolbar.component.spec.ts
|   |  ┣ pages
|   |  |  ┗ page-not-found.component.spec.ts
|   |  ┗ singleton.guard.spec.ts
|   ┣ main-routing.module.spec.ts
|   ┣ main.component.spec.ts
|   ┗ main.module.spec.ts
```

## Directory Structure Parts

#### Sections

- [App Directory](./docs/app-directory.md)
- [Shared Directory](./docs/shared-directory.md)
- [Assets Directory](./docs/assets-directory.md)
- [Config Directory](./docs/config-directory.md)
- [Core Directory](./docs/core-directory.md)
- [Styles Directory](./docs/styles-directory.md)
- [Test Directory](./docs/test-directory.md)

#### Extras

- [Path Alias](./docs/path-alias.md)

## Installation

```bash
# Prerequisites: Install [Node.js] which includes [Node Package Manager][npm]
$ npm install
```

## Running the app

```bash
# Development
$ ng serve
```

```bash
# Production Mode
$ ng build
```

## Test

```bash
# Unit Tests
$ ng test
```

## License

Copyright (c) Manuel Da Pena. [@NachoDPP](https://github.com/NachoDPP "@NachoDPP")

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Considerations

Please keep in mind that this concept is in its early stages of execution and design; any suggestions or comments are welcome.
