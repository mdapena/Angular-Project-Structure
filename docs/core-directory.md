<p align="center">
  <img src="../docs/images/core_directory.svg" alt="core-directory" width="48px" height="48px"/>
  <br>
</p>


# Core Directory

This module is designed for global functionalities. This directory should contain resources that are always loaded, including route guards, HTTP interceptors, infrastructure-level services like ThemeService and logging, layout components, and routing error pages.

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
