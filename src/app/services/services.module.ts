import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SharedService, SettingsService } from './services.index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    SidebarService,
    SharedService,
    SettingsService
  ]
})
export class ServicesModule { }
