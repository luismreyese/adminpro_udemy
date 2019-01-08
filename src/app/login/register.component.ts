import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/services.index';

import swal from 'sweetalert';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';



declare function plug_init();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;
  constructor( public _usrservice: UserService,
               public _router: Router ) { }

  noIguales( campo1: string, campo2: string) {

    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
       return;
      }
      return { noIguales: true };
    };

  }

  ngOnInit() {
   plug_init();
   this.forma =  new FormGroup({
    nombre:      new FormControl(null, Validators.required),
    email:       new FormControl(null, [Validators.required, Validators.email]),
    password1:   new FormControl(null, Validators.required),
    password2:   new FormControl(null, Validators.required),
    condiciones: new FormControl(false)
  }, {validators: this.noIguales('password1', 'password2')}
  );

  this.forma.setValue({
    nombre:      'test',
    email:       'test@gmail.com',
    password1:   '12345',
    password2:   '12345',
    condiciones: false
  });

  }
  procesarDatos() {

    let usuario: Usuario;
    if (this.forma.invalid) {
    swal({
          title:  'Error',
          text:   'Formato no Valido',
          icon:   'error'
      });
      return;
    }
    if (!this.forma.value.condiciones) {
      swal({
        title:  'Importante',
        text:   'Debe aceptar las condiciones para continuar',
        icon:   'warning'
    });
    return;
    }

    usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password1
    );
    this._usrservice.crearUSuario(usuario).subscribe( (respuesta) => {
      this._router.navigate(['/login']); } );
  }
}
