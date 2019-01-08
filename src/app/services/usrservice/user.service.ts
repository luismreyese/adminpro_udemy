import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { UsrTmp } from '../../models/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  usuario: UsrTmp;

  constructor( public _httpClient: HttpClient) {
    this.getTmprUsr();
   }

  checkLogin(): boolean {

    return ( this.token.length > 5 ) ? true : false;

  }
  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  loginGoogle(token: string) {
    const URL = URL_SERVICES + '/login/google';

    return this._httpClient.post( URL , {token: token }).pipe( map( (respuesta: any) => {
      const usuario = respuesta.argmnt.usuario;
       swal(usuario.email, 'Login realizado Satisfactoriamente', 'success');
      const usrTemp = new UsrTmp(usuario.email, usuario.nombre, respuesta.argmnt.token);
      this.setTmprUsr( usrTemp, false );
    console.log(respuesta);
     } ) );
  }

  login( usuario: Usuario, recuerdame: boolean) {
    const URL = URL_SERVICES + '/login';
    console.log(usuario);
    return this._httpClient.post( URL , usuario).pipe( map( (respuesta: any) => {
     swal(usuario.email, 'Login realizado Satisfactoriamente', 'success');
     const usrTemp = new UsrTmp(usuario.email, usuario.nombre, respuesta.argmnt.token);
     this.setTmprUsr( usrTemp, recuerdame );
     console.log(respuesta);
      // return respuesta.argmnt;
    } ) );
  }


  crearUSuario( usuario: Usuario) {
   const URL = URL_SERVICES + '/usuario';
   return this._httpClient.post( URL , usuario).pipe( map( (respuesta: any) => {
    swal(usuario.email, 'Creado Satisfactoriamente', 'success');
    return respuesta.argmnt.body;
   } ) );
  }

setTmprUsr( usrtmp: UsrTmp, recordar: boolean ) {
 localStorage.setItem('usuario', JSON.stringify(usrtmp) ); // JSON.stringify(usrtmp)
 localStorage.setItem('token', usrtmp.token ); // JSON.stringify(usrtmp)
 if (recordar === true ) {
   localStorage.setItem('email', usrtmp.email ); } else {
   localStorage.removeItem('email');
 }
 this.token  = usrtmp.token;
 this.usuario = usrtmp;
}

getTmpremail(): string {
  if (localStorage.getItem('email')) {
   return localStorage.getItem('email');
  }
  return '';
}

getTmprUsr(): UsrTmp {
  if (localStorage.getItem('token')) {
   this.token = localStorage.getItem('token');
   this.usuario =  JSON.parse( localStorage.getItem('usuario'));
   return this.usuario;
  }
  this.token = '';
  this.usuario = null;
  return this.usuario;
}

// Fin de la Clase
}
