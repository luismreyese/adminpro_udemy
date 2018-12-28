import { Component, OnInit, Output } from '@angular/core';

interface Igraficos {
  labels: string[];
  data: number[];
  type: string;
  leyenda: string;
}

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})


export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };
  objectGrp: Igraficos;
  pGraficos: Igraficos[];
  constructor() {
    // console.log('inicio', this.graficos);
   }

  ngOnInit() {
    // for (const grap in this.graficos) {
    //   if (this.graficos.hasOwnProperty(grap)) {
    //     const element = this.graficos[grap];
    //     // tslint:disable-next-line:no-unused-expression
    //     this.objectGrp = element;
    //     console.log('elementos', this.objectGrp);


    //   }
    // }
    // for (const grafico of this.graficos) {
    //   console.log('parse graficos', grafico);
    //   this.pGraficos.push(grafico);
    //   console.log('arreglo', this.pGraficos);
    //   }
  }

}
