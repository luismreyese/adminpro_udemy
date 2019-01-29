import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UserService, ModalserviceService } from 'src/app/services/services.index';

declare var swal: any;


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalreg: number = 0;
  cargando: boolean;
  constructor( private _service: UserService, private _mdlService: ModalserviceService  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._mdlService.notificacion.subscribe( (resp) => {this.cargarUsuarios(); } );
  }

  cargarUsuarios() {
  this.cargando = true;
   this._service.cargarUsuarios(this.desde).subscribe( (resp: any) => {
     this.usuarios = resp.argmnt.usuarios;
     this.totalreg = resp.argmnt.totalReg;
      // console.log( 'total', this.totalreg );
      // console.log( this.usuarios[0] );
      this.cargando = false;
   }
   );

  }
  paginar(numreg: number) {
    let noReg: number;

    noReg = this.desde + numreg;
    if ( noReg >= this.totalreg || noReg < 0) {
      return;
    }
    this.desde = noReg;
    this.cargarUsuarios();

  }
  buscarUsuario(valor: string) {
    if (valor.length <= 0 ) {
      this.cargarUsuarios();
      return;
    }

    this._service.buscarColecciones( 'usuarios', valor ).subscribe( (resp) => {
      this.usuarios = resp;
       this.totalreg = this.usuarios.length;
      // console.log( 'total', this.totalreg );
      // console.log( this.usuarios );
    } );

  }
actualizarUsuario(usuario: Usuario) {
 this._service.UserUpdate(usuario).subscribe();
}

borrarUsuario(userId) {

  if (userId === this._service.usuario._id) {
    swal('No puede Eliminar el Usuario con el que Ingresó', {
      icon: 'error',
    });
    return;
  }
  swal({
  title: 'Esta Usted Seguro?',
  text: 'Una vez eliminado no podra recuperar los datos',
  icon: 'warning',
  buttons: true,
  dangerMode: true,
})
.then((borrar) => {
  if (borrar) {
    this._service.eliminarUsuario(userId).subscribe(
      (resp: any) => {
        // console.log(resp);
        if ( resp.Ok ) {
          swal('Usuario Eliminado', {
      icon: 'success',
    });
    this.cargarUsuarios();
        } else {
          swal('Error Eliminando Usuario', {
      icon: 'error',
        } );
      }
    }
    );
  }
  // else {
  //   swal("Your imaginary file is safe!");
  // }
});
}
  setimage(usuario: Usuario ) {
  this._mdlService.usuario = usuario;
  if (usuario.img === undefined || usuario.img === null ) {
    this._mdlService.imagen = 'XXX';
  } else {this._mdlService.imagen = usuario.img; }

this._mdlService.mostarModal('usuarios', usuario._id);


  }
}
