import { NgModule, Optional, SkipSelf } from '@angular/core';
import { singletonGuard } from './guards/singleton.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [],
    providers: [],
    exports: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        singletonGuard(parentModule, 'CoreModule');
    }
}
