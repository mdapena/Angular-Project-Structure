// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** App root paths */
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
