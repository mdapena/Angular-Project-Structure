import { EnvironmentEnum } from "@envs/enums/environment.enum";

/** `IConfig` is an interface designed to implement type-safe config schemas */
export interface IConfig {
    app: {
        name: string;
        copyright: string;
        owner: string;
    },
    env: {
        name: EnvironmentEnum;
    };
    apiServer: {
        url: string;
    };
}