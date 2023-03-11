import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainRoutingModule } from "./main-routing.module";
import { ConfigService } from "@config/services/config.service";
import { ConfigModule } from "@config/config.module";
import { MainComponent } from "./main.component";
import { mainFactory } from "@core/factories/main.factory";
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
            useFactory: mainFactory,
            deps: [ConfigService],
            multi: true,
        }
    ],
    bootstrap: [MainComponent],
})
export class MainModule { }
