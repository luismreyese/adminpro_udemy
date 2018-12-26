import { Routes, RouterModule } from '@angular/router';

// import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { RegisterComponent } from './login/register.component';


const routes: Routes = [
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
