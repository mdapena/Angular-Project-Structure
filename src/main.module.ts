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
            deps: [ConfigService],
            multi: true,
        }
    ],
    bootstrap: [MainComponent],
})
export class MainModule {
    constructor(@Optional() @SkipSelf() parentModule: MainModule) {
        singletonGuard(parentModule, 'MainModule');
    }

    static factory(config: ConfigService) {
        return () => config.load().then(() => {
            // Callbacks
        });
    }
}
