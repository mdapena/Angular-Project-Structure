<p align="center">
  <img src="../docs/images/config_directory.svg" alt="config-directory" width="48px" height="48px"/>
  <br>
</p>

# Config Directory

This directory contains all configuration files and parameters for the application's environments. For example, in the Config directory, you might find the following resources: ConfigService, ConfigModule, development, and production stages, and so on. By default, the app's settings are loaded using the JSON file technique, which allows you to update the app's parameters after it's built without rebuilding the app. For more information, see [Angular Config With JSON Files](https://www.youtube.com/watch?v=GUJ9FGHIKnA "Angular Config With JSON Files").

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
