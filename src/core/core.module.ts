// ANGULAR IMPORTS
import { NgModule, Optional, SkipSelf } from '@angular/core';

// CORE IMPORTS
import { singletonGuard } from './guards/singleton.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ThemeService } from './services/theme.service';

@NgModule({
    declarations: [PageNotFoundComponent],
    providers: [ThemeService]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        singletonGuard(parentModule, 'CoreModule');
    }
}
