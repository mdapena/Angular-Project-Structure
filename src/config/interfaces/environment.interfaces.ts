import { EnvironmentEnum } from "../enums/environment.enum";

/** IEnvironment is an interface designed to implement type-safe 
 *  schemas for environments. */
export interface IEnvironment {
    name: EnvironmentEnum
}