import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/services.index';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  usuario: Usuario;
  constructor(public _service: UserService, private _router: Router) { }

  ngOnInit() {
    this.usuario = this._service.usuario;
  }

  logOut() {
    this._service.logout();
// this._service.logout();
    this._router.navigate(['/login']);
  }
}
