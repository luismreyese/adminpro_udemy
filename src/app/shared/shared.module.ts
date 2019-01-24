import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NofoundpageComponent } from './nofoundpage/nofoundpage.component';
import { ServicesModule } from '../services/services.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    NofoundpageComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
})
export class SharedModule { }
