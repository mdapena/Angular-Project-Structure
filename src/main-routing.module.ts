import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** Main root paths */
const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadComponent: () => import('@core/pages/page-not-found/page-not-found.component').then((c) => c.PageNotFoundComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
