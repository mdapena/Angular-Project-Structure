import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainRoutingModule } from "./main-routing.module";
import { ConfigService } from "@config/services/config.service";
import { ConfigModule } from "@config/config.module";
import { MainComponent } from "./main.component";
import { mainFactory } from "./main.factory";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        BrowserModule,
        MainRoutingModule,
        ConfigModule
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
