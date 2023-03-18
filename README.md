<p align="center">
  <img src="./docs/images/angular.png" alt="angular-logo" width="180px" height="180px"/>
  <br>
  <i>A modular and domain driven structure for Angular projects</i>
  <br>
</p>

# Angular Project Structure

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Description

This project is a proposal for the organization and structure of an Angular project using the domain and modularity approach. This structure arises from the need to separate the domain/workspace layer from the different concepts of the Angular application and infrastructure. This project defines directory structure in an Angular application and it is a working application. You are free to design your own tree structure if these are not suitable.

## Summary

The main idea behind this structure is to create an application context section that groups all application features and domain modules to be implemented, as well as a shared module that contains all reusable classes, resources and components. Outside of this context will be all classes and resources that are not bound to the application domain or infrastructure related, such as config and core modules, application bootstrap factories, testing section, and so forth.

## Table of Content

- [App Directory](./docs/app-module.md)
- [Shared Directory](./docs/shared-module.md)
- [Config Directory](./docs/config-module.md)
- [Core Directory](./docs/core-module.md)
- [Tests Directory](./docs/tests-directory.md)

## Directory Tree Sections

These are the sections that this repository proposes to add to the default structure of an Angular application. See the Directory Structures section for more information.

#### SRC Directory

```bash
src
┣ app
|  ┣ landing
|  |  ┣ pages
|  |  |  ┗ landing-page
|  |  |     ┗ page-not-found.component|.html|.scss|.ts
|  |  ┗ landing.module.ts
|  ┣ shared
|  |  ┗ shared.module.ts
|  ┣ app-routing.module.ts
|  ┗ app.module.ts
┣ assets
|  ┗ favicons
|      ┗ favicon.ico
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
┣ core
|  ┣ guards
|  |  ┗ singleton.guard.ts
|  ┣ pages
|  |  ┗ page-not-found
|  |     ┗ page-not-found.component|.html|.scss|.ts
|  ┗ core.module.ts
┣ styles
|  ┗ styles.scss
┣ index.html
┣ main-routing.module.ts
┣ main.component.html
┣ main.component.ts
┣ main.module.ts
┗ main.ts
```

#### Test Directory

```bash
.
┣ src
|   ...
┗ test
    ┣ app
    |  ┣ app-routing.module.spec.ts
    |  ┗ app.module.spec.ts
    ┣ config
    |  ┗ config.service.spec.ts
    ┣ core
    |  ┣ pages
    |  |  ┗ page-not-found.component.spec.ts
    |  ┗ singleton.guard.spec.ts
    ┣ main-routing.module.spec.ts
    ┣ main.component.spec.ts
    ┗ main.module.spec.ts
```

## Development Setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Development server

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Reminder

Please keep in mind that this concept is in its early stages of execution and design; any suggestions or comments are welcome.

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
