# Core Directory

## Description

This module is for classes used by app.module. This directory should contain resources that are always loaded, including route guards, HTTP interceptors and application level services such as ThemeService and logging.

```bash
.
┣ core
   ┣ guards
      ┗ singleton.guard.ts
   ┣ pages
      ┗ page-not-found
         ┗ page-not-found.component|.html|.scss|.ts
   ┗ core.module.ts
```
