import { Component, OnInit } from '@angular/core';


import { SidebarService } from '../../services/services.index';
import { UserService } from '../../services/services.index';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  usuario: Usuario;
  constructor( public srvshared: SidebarService, public usr_srv: UserService, public _router: Router) { }

  ngOnInit() {
    this.usuario = this.usr_srv.usuario;

  }
  logOut() {
   this.usr_srv.logout();
   this._router.navigate(['/login']);
  }

}
