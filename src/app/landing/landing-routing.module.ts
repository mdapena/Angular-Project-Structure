// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// LANDING IMPORTS
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

/** Landing root paths */
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LandingPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
