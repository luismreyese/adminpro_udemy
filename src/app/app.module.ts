// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NofoundpageComponent } from './shared/nofoundpage/nofoundpage.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';


// Services

// import { SharedService } from './services/shared.service';
// import { SidebarService } from './services/sidebar.service';

// Routers

import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NofoundpageComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [
    // SharedService,
    // SidebarService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
