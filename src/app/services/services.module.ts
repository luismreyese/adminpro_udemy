import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SharedService, SettingsService, UserService, SubirArchivoService } from './services.index';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './guards/login-guard.guard';
// import {  } from './subir-archivo/subir-archivo.service';
import { ModalserviceService } from '../components/modal-upload/modalservice.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    SettingsService,
    UserService,
    LoginGuardGuard,
    SubirArchivoService,
    ModalserviceService
  ]
})
export class ServicesModule { }
