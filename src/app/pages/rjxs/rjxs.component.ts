import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, observable, Subscriber, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rjxs',
  templateUrl: './rjxs.component.html',
  styles: []
})
export class RjxsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

  this.subscription = this.retornaObs().pipe( retry(2) )   // el Retry permite ejecutar n veces el observable al ocurrir un error.
                                       .subscribe( (numcount) => console.log('contador:', numcount),
                                                   (error) => console.log('error', error),
                                                   () => console.log('finalizo!!') );
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

    this.subscription.unsubscribe();




  }

  retornaObs(): Observable<number> {

    return new Observable(
      (observer: Subscriber<number> ) => {
        let contador = 0 ;
        const intervalo = setInterval( () => {
           contador += 1;
           observer.next( contador );
          if ( contador === 3) {
              clearInterval(intervalo); // detiene el SetInterval
              observer.complete( ); // Detiene el OBservable
         }
         if ( contador === 2 || contador >= 5) {
           clearInterval(intervalo); // detiene el SetInterval
           observer.error( 'limite superado en un 330% ');
         }
         }, 1000 );
      }
   );

  }

}
