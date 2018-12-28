import { Component, OnInit } from '@angular/core';

declare function plug_init();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    plug_init();
  }

}
