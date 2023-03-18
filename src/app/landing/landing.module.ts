// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// LANDING IMPORTS
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        LandingRoutingModule,
        CommonModule
    ]
})
export class LandingModule { }
