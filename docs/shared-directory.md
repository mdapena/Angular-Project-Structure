<p align="center">
  <img src="../docs/images/shared_directory.svg" alt="shared-directory" width="48px" height="48px"/>
  <br>
</p>

# Shared Directory

The Shared directory contains all reusable classes and resources used and shared between domain/feature modules. For example, you might find the following resources in this directory: common domain services, modal and page components, and so on.

```bash
.
┣ app 
|  ┣ shared # All reusable classes and resources that are used between domain/feature modules should be added here
|  |  ┗ shared.module.ts
|  ┣ app-routing.module.ts
|  ┗ app.module.ts
```
