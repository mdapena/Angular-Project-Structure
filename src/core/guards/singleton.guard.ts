/** Provides a dependency guard that guarantees a class singleton. It throws an error if a parent object of the same class already exists. 
 *  This guard must be used in conjunction with the Optional and SkipSelf decorator at the constructor level of a class.
 *  @param parentModule 
 *  @param moduleName 
 *  @example
 * 
 * import { NgModule, Optional, SkipSelf } from '@angular/core';
 * import { singletonGuard } from '@core/guards/singleton.guard';
 * 
 * !@NgModule({})
 * export class AnyModule {
 *      // This module can only be imported once.
 *      constructor(@Optional()@SkipSelf() parentModule: AnyModule) {
 *          singletonGuard(parentModule, 'AnyModule'); 
 *      }
 * }
 * */
export function singletonGuard<T extends Object>(parentModule: T, moduleName: string) {
    if (parentModule) {
        throw new Error(
            `${moduleName} has already been loaded. Import ${moduleName} modules in the MainModule only.`
        );
    }
}