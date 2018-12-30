import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import { containerRefreshEnd } from '@angular/core/src/render3';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarnum().then( ( mensaje ) => { console.log( 'termino!!', mensaje ); }).catch( (error) => { console.log( 'Error', error); } );

  }
  ngOnInit() {
  }

// La promesa se dispara una vez alcanzado el Resolve o el Reject no puede dispararse varias veces en el mismo llamado

 contarnum(): Promise<String> {
  return new Promise( ( resolve, reject ) => {
    let contador = 0;
    const intervalo = setInterval( () => { contador += 1;
      console.log(contador);
    if (contador === 3 ) {
      resolve( 'Alcanzo el Limite');
    }
     if ( contador >= 10 ) {
      clearInterval(intervalo);
      reject('supero el limite en un 330%');
    }
  }, 1000 );
  }  );
 }

}
