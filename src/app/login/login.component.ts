import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/services.index';
import { Usuario, UsrTmp } from '../models/usuario.model';

declare function plug_init();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  email: string;
  navigate: boolean;
  auth2: any;
  constructor( public router: Router, public _usrService: UserService) { }

  ngOnInit() {
    plug_init();
    this.googleInit();
    this.email = this._usrService.getTmpremail();
    if (this.email !== '') {
      this.recuerdame = true;
    }
    if (this.navigate === true) { this.router.navigate(['/dashboard']); }
  }
  chngroute( ): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    if (this.navigate === true) { this.router.navigate(['/dashboard']); }
  }

googleInit() {
  gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '166973008589-28svai3c7itlgu850it5seebquc3u64b.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
    this.attachSignin(document.getElementById('btngoogle'));
  } );
}

attachSignin( element ) {
  this.auth2.attachClickHandler( element, {}, (googleuser) => {
  // const profile = googleuser.getBasicProfile();
  const token = googleuser.getAuthResponse().id_token;
  console.log(token);
  this._usrService.loginGoogle(token).subscribe( () => {
    // this.router.navigate(['/dashboard']);
    this.navigate = true;
    this.chngroute();
  } );

  } );
 }


  ingresar(forma: NgForm ) {
    let usuario: Usuario;
    if (forma.valid) {
      usuario = new Usuario(null, forma.value.email, forma.value.password);
      this._usrService.login( usuario, this.recuerdame ).subscribe( ( ) => {
        this.navigate = true;
        this.chngroute();
      } );

    }
  }
}
