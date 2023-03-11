import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app/app.module').then((m) => m.AppModule),
    },
    {
        path: '**',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
