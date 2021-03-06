import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';


@NgModule({
  declarations: [
    GraficoDonaComponent,
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule
  ],
  exports: [
    GraficoDonaComponent,
    IncrementadorComponent
  ]
})
export class ComponentsModule { }
