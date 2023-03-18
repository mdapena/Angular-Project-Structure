<p align="center">
  <img src="../docs/images/shared_directory.svg" alt="shared-directory" width="48px" height="48px"/>
  <br>
</p>

# Shared Directory

The shared module contains all reusable classes and resources that are used between domain/feature modules. Since the shared components are constantly loaded with the application, they are available whenever a module requests them.

```bash
.
┣ app 
   ┣ shared # All reusable classes and resources that are used between domain/feature modules should be added here
      ┗ shared.module.ts
   ┣ app-routing.module.ts
   ┗ app.module.ts
```
