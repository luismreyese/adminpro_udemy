import { Routes, RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RjxsComponent } from './rjxs/rjxs.component';
import { LoginGuardGuard } from '../services/services.index';


const routes: Routes = [
    { path: '',
      component: PagesComponent,
      canActivate: [ LoginGuardGuard ],
      children: [
                    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
                    { path: 'progress',  component: ProgressComponent, data: { titulo: 'Progress'} },
                    { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Indicadores'} },
                    { path: 'promesas',  component: PromesasComponent, data: { titulo: 'Promesas'}},
                    { path: 'settings',  component: AccountSettingsComponent, data: { titulo: 'Configurar Temas'}},
                    { path: 'rjxs',      component: RjxsComponent, data: { titulo: 'Observables'}},
                    { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
                ]
    },
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class FeatureRoutingModule {}

export const PAGES_ROUTES = RouterModule.forChild(routes);
