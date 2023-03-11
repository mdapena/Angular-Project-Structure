export function singletonGuard(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(
            `${moduleName} has already been loaded. Import ${moduleName} modules in the MainModule only.`
        );
    }
}