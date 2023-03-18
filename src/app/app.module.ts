// ANGULAR IMPORTS
import { NgModule } from '@angular/core';

// APP IMPORTS
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from '@landing/landing.module';

@NgModule({
    imports: [
        AppRoutingModule,
        LandingModule
    ]
})
export class AppModule { }
