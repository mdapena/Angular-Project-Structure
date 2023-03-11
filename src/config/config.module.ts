// ANGULAR IMPORTS
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// CONFIG IMPORTS
import { ConfigService } from "./services/config.service";
import { singletonGuard } from "@core/guards/singleton.guard";

@NgModule({
    imports: [HttpClientModule],
    providers: [ConfigService],
})
export class ConfigModule {
    constructor(@Optional() @SkipSelf() parentModule: ConfigModule) {
        singletonGuard(parentModule, 'ConfigModule');
    }
}
