import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // @Input se utiliza para recibir valores desde los components padre que lo usan

  @ViewChild('txtProgress') progress: ElementRef;

  @Input() leyenda:    string = 'Leyenda'; // Los valores se convierten en valores de inicializacion
  @Input() porcentaje: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  valueChanged( newValue: number ) {
    // let elementHtml = document.getElementsByName('porcentaje')[0];

  if (newValue <= 0 ) {
    this.porcentaje = 0;
  } else if ( newValue >= 100 ) {
    this.porcentaje = 100;
  } else {
    this.porcentaje = newValue;
  }
    // elementHtml.value = this.porcentaje;
    this.progress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit( this.porcentaje );
  }


  cambiarprcnt( valor: number) {

    if (this.porcentaje <= 0 && valor < 0) {
     return;
    } else if (this.porcentaje >= 100 && valor > 0 ) {
      return;
     }


   this.porcentaje += valor;
  this.cambioValor.emit( this.porcentaje );

  // Para tener el foco del elemento
  this.progress.nativeElement.focus();
  }
}
