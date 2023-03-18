/** Provides a dependency guard that guarantees a singleton of a given class.
 *  @param parentModule 
 *  @param moduleName */
export function singletonGuard<T extends Object>(parentModule: T, moduleName: string) {
    if (parentModule) {
        throw new Error(
            `${moduleName} has already been loaded. Import ${moduleName} modules in the MainModule only.`
        );
    }
}