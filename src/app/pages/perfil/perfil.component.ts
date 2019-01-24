import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UserService } from 'src/app/services/services.index';
import { URL_SERVICES } from '../../config/config';
import { isUndefined } from 'util';
import { resolve } from 'dns';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {
  usuario: Usuario;
  imagen: string;
  imagenTmp: any;
  archivo: File;

  constructor(private _route: Router, private _service: UserService, private _ngzone: NgZone) { }

  ngOnInit() {
    this.usuario = this._service.usuario;
    if (this.imagen === null || this.imagen === undefined ) {
    this.imagen = this.usuario.img; }

    // if (this.usuario.google !== true ) {
    //    this.imagen = `${URL_SERVICES}/uploads/usuarios/${this.imagen}`;
    // }
  }

  userUpdate(usuario: Usuario ) {
  this.usuario.nombre = usuario.nombre;
  // console.log( 'Logo:', this.imagen );
  if (usuario.email === undefined || usuario.email === '' || usuario.email === null) { } else {this.usuario.email  = usuario.email; }
  // console.log(this.usuario);
  this._service.UserUpdate(this.usuario).subscribe();

  }
  cargarArchivo() {
    this._service.ChngImage(this.archivo, 'usuarios', this.usuario._id);

  }
  setArchivo( formato ) {
    let archivo: File;
    const reader = new FileReader();
    archivo = formato.target.files[0];

  //  console.log( archivo );

    if ( !archivo ) {
      return; }
    this.archivo = archivo;

    const UrlTmpImage = reader.readAsDataURL( archivo );

    reader.onloadend = () => {  console.log(reader.result);
                                this.imagenTmp = reader.result; };
    // this.imagen  = formato.target.value;
    // console.log( this.archivo );
    // console.log( this.imagen );
   }

}
