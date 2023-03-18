// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// APP IMPORTS
import { LandingPageComponent } from '@landing/pages/landing-page/landing-page.component';

/** App root paths */
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: LandingPageComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
