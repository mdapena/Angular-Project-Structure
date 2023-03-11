import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        BrowserModule,
        MainRoutingModule
    ],
    providers: [],
    bootstrap: [MainComponent],
})
export class MainModule { }
