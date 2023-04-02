// ANGULAR IMPORTS
import { NgModule, Optional, SkipSelf } from '@angular/core';

// CORE IMPORTS
import { singletonGuard } from './guards/singleton.guard';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        singletonGuard(parentModule, 'CoreModule');
    }
}
