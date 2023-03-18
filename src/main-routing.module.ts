import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/pages/page-not-found/page-not-found.component';

/** Main root paths */
const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
