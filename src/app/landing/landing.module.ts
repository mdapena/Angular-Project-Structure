// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// LANDING IMPORTS
import { LandingToolbarComponent } from './components/landing-toolbar/landing-toolbar.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    LandingToolbarComponent,
    LandingFooterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
