// ANGULAR IMPORTS
import { NgModule } from '@angular/core';

// APP IMPORTS
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        AppRoutingModule,
        SharedModule,
        LandingModule,
    ]
})
export class AppModule { }
