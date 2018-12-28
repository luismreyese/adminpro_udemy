import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

declare function plug_init();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
    plug_init();
  }
  ingresar() {
    this.router.navigate(['/dashboard']);
  }

}
