<p align="center">
  <img src="../docs/images/core_directory.svg" alt="core-directory" width="48px" height="48px"/>
  <br>
</p>


# Core Directory

The Core directory contains all the infrastructure functions that are always loaded. For example, in this directory, you might find the following resources: route guards, HTTP interceptors, layout components, routing error pages, infrastructure-level services like ThemeService, logging, AuthService, etc.

```bash
.
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
```
