import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { UsrTmp } from '../../models/usuario.model';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: string;
  usuario: Usuario;

  constructor( public _httpClient: HttpClient, private _fileService: SubirArchivoService ) {
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
      // const usrTemp = new UsrTmp(usuario.email, usuario.nombre, respuesta.argmnt.token, usuario.img, usuario.role);
      this.setTmprUsr( usuario, false, respuesta.argmnt.token );
    console.log(respuesta);
     } ) );
  }
  login( usuario: Usuario, recuerdame: boolean) {
    const URL = URL_SERVICES + '/login';
    console.log(usuario);
    return this._httpClient.post( URL , usuario).pipe( map( (respuesta: any) => {
     swal(usuario.email, 'Login realizado Satisfactoriamente', 'success');
     const usrTemp = respuesta.argmnt.usuario;
     this.setTmprUsr( usrTemp, recuerdame, respuesta.argmnt.token );
     console.log(respuesta);
      // return respuesta.argmnt;
    } ) );
  }


  crearUSuario( usuario: Usuario) {
   const URL = URL_SERVICES + '/usuario';
   return this._httpClient.post( URL , usuario).pipe( map( (respuesta: any) => {

    return respuesta.argmnt.body;
   } ) );
  }

setTmprUsr( usrtmp: Usuario, recordar: boolean, token: string ) {
  // usrtmp.password = '';
 localStorage.setItem('usuario', JSON.stringify(usrtmp) ); // JSON.stringify(usrtmp)
 if (token.length >= 5 ) {
 localStorage.setItem('token', token ); // JSON.stringify(usrtmp)
 this.token  = token;
 }
 if (recordar === true ) {
   localStorage.setItem('email', usrtmp.email ); } else {
   localStorage.removeItem('email');
 }
 this.usuario = usrtmp;
}

getTmpremail(): string {
  if (localStorage.getItem('email')) {
   return localStorage.getItem('email');
  }
  return '';
}

getTmprUsr(): Usuario {
  if (localStorage.getItem('token')) {
   this.token = localStorage.getItem('token');
   this.usuario =  JSON.parse( localStorage.getItem('usuario'));
   return this.usuario;
  }
  this.token = '';
  this.usuario = null;
  return this.usuario;
}

UserUpdate(usuario: Usuario) {

  const URL = `${URL_SERVICES }/usuario/${usuario._id}?token=${this.token}`;
  return this._httpClient.put(URL, usuario).pipe(map(( respuesta: any ) => {
   this.setTmprUsr(usuario, !usuario.google , '');
   swal(usuario.email, respuesta.argmnt.message , 'success');
   return true;
  } ));
}

ChngImage(file: File, tipo: string, id: string ) {
this._fileService.subirArchivo(file, tipo, id).then(
 (resp: any) => {

swal(this.usuario.email, 'Imagen Actualizada' , 'success');
this.usuario.img = resp.argmnt.usuarioAct.img;
this.setTmprUsr( this.usuario, false , '' );
 }
)
.catch(
  error => {
    swal(this.usuario.email, 'Error en la actualización de la imagen ' , 'danger');
  }
);
}

// Fin de la Clase
}
