import { Component, OnInit } from '@angular/core';

declare function plug_init();

@Component({
  selector: 'app-nofoundpage',
  templateUrl: './nofoundpage.component.html',
  styles: []
})
export class NofoundpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    plug_init();
  }

}
