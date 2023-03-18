import { EnvironmentEnum } from "@config/enums/environment.enum";

/** IEnvConfig is an interface designed to implement type-safe schemas 
 *  for environment configuration. */
export interface IEnvConfig {
    env: {
        name: EnvironmentEnum;
    };
    app: {
        name: string;
        copyright: string;
        owner: string;
    };
    apiServer: {
        url: string;
    };
}