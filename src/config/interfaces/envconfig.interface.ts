import { EnvironmentEnum } from "@config/enums/environment.enum";

/** `IEnvConfig` is an interface designed to implement type-safe environment config schemas */
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