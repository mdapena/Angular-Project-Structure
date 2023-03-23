<p align="center">
  <img src="../docs/images/app_directory.svg" alt="app-directory" width="48px" height="48px"/>
  <br>
</p>

# App Directory

The App directory contains all domain/feature modules of the application. For example, in this directory, you might find the following modules: Home, Landing, About, Contact, Auth and so on. Lazy load techniques should be applied to these modules to ensure that Angular loads only the module needed to display the request, saving bandwidth and speeding up the entire application.

```bash
.
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
```
