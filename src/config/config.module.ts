import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ConfigService } from "./services/config.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [ConfigService],
})
export class ConfigModule { }
