import { Routes, RouterModule } from '@angular/router';

// import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
    { path: '',
      component: PagesComponent,
      children: [
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'progress', component: ProgressComponent },
                    { path: 'graficas1', component: Graficas1Component },
                    { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
                ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NofoundpageComponent  }
];
// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class FeatureRoutingModule { }

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
