import { NgModule, Optional, SkipSelf } from '@angular/core';
import { singletonGuard } from './guards/singleton.guard';

@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    exports: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        singletonGuard(parentModule, 'CoreModule');
    }
}
