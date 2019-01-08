// Modules

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';

import { ServicesModule  } from './services/services.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Components

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


// Services

// import { SharedService } from './services/shared.service';
// import { SidebarService } from './services/sidebar.service';

// Routers

import { APP_ROUTES } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    PagesModule,
    BrowserModule,
    APP_ROUTES,
    ServicesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
