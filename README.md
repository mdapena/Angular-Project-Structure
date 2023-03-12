<p align="center">
  <img src="./docs/images/angular.png" alt="angular-logo" width="120px" height="120px"/>
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

## Directory Tree Sections

These are the sections that this repository proposes to add to the default structure of an Angular application. See the Directory Structures section for more information.

```bash
.
┣ app
|  ┣ shared
|  |  ┗ shared.module.ts
|  ┣ app-routing.module.ts
|  ┗ app.module.ts
┣ assets
|  ┗ favicons
|      ┗ favicon.ico
┣ config
|  ┣ interfaces
|  |  ┗ config.interface.ts
|  ┣ jsons
|  |  ┣ config.development.json
|  |  ┗ config.production.json
|  ┣ services
|  |  ┗ config.service.ts
|  ┗ config.module.ts
┣ core
|  ┣ guards
|  |  ┗ singleton.guard.ts
|  ┣ pages
|  |  ┗ page-not-found
|  |     ┗ page-not-found.component|.html|.scss|.ts
|  ┗ core.module.ts
┣ environments
|  ┣ enums
|  |  ┗ environment.enum.ts
|  ┣ interfaces
|  |  ┗ environment.interfaces.ts
|  ┣ environment.development.ts
|  ┗ environment.ts
┣ test
|  ┣ app
|  |  ┣ app-routing.module.spec.ts
|  |  ┗ app.module.spec.ts
|  ┣ config
|  |  ┗ config.service.spec.ts
|  ┣ core
|  |  ┣ pages
|  |  |  ┗ page-not-found.component.spec.ts
|  |  ┗ singleton.guard.spec.ts
|  ┣ main-routing.module.spec.ts
|  ┣ main.component.spec.ts
|  ┗ main.module.spec.ts
┣ index.html
┣ main-routing.module.ts
┣ main.component.html
┣ main.component.ts
┣ main.module.ts
┗ main.ts
```

##### Note

Please keep in mind that this concept is in its early stages of execution and design; any suggestions or comments are welcome.

## Development Setup

### Prerequisites

- Install [Node.js] which includes [Node Package Manager][npm]

### Setting Up a Project

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

Create workspace:

```
ng new [PROJECT NAME]
```

Run the application:

```
cd [PROJECT NAME]
ng serve
```

Angular is cross-platform, fast, scalable, has incredible tooling, and is loved by millions.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
