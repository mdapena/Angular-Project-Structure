// ANGULAR IMPORTS
import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// MAIN IMPORTS
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { ConfigService } from "@config/services/config.service";
import { singletonGuard } from "@core/guards/singleton.guard";
import { ConfigModule } from "@config/config.module";
import { CoreModule } from "@core/core.module";
import { ThemeService } from "@core/services/theme.service";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        BrowserModule,
        MainRoutingModule,
        ConfigModule,
        CoreModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: MainModule.factory,
            deps: [ConfigService, ThemeService],
            multi: true,
        }
    ],
    bootstrap: [MainComponent],
})
export class MainModule {
    constructor(@Optional() @SkipSelf() parentModule: MainModule) {
        singletonGuard(parentModule, 'MainModule');
    }

    static factory(config: ConfigService, theme: ThemeService) {
        return () => config.load().then(() => {
            return () => theme.load().then(() => {
                // Callbacks
            })
        });
    }
}
