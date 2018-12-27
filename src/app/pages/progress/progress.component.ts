import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
progreso1 = 20;
progreso2 = 60;

constructor() { }

  ngOnInit() {
  }
  actualizar( event: number ) {
   this.progreso1 = event;
  }
  actualizarV( event: number ) {
    this.progreso2 = event;
   }
}
