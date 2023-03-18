<p align="center">
  <img src="../docs/images/config_directory.svg" alt="config-directory" width="48px" height="48px" style="color: #5f6368;"/>
  <br>
</p>

# Config Directory

This directory contains all classes and resources associated with the application's settings. By default it uses the JSON file technique, which allows you to update the configuration of your application at runtime. For more information, see [Angular Config With JSON Files](https://www.youtube.com/watch?v=GUJ9FGHIKnA "Angular Config With JSON Files")

```bash
.
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
```
