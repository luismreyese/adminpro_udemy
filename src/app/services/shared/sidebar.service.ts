import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      smenu: [
        {titulo: 'Dashboard' ,   url:  '/dashboard'},
        {titulo: 'perfil' ,      url:  '/perfil'},
        {titulo: 'Progress' ,    url:  '/progress'},
        {titulo: 'Graficas' ,    url:  '/graficas1'},
        {titulo: 'promesas' ,    url:  '/promesas'},
        {titulo: 'Observables' , url: '/rjxs'}
      ]

    },
  {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-open', // -look-open
      smenu: [
        {titulo: 'Usuarios' ,    url:  '/usuarios'},
        {titulo: 'Medicos' ,     url:  '/medicos'},
        {titulo: 'Hospitales' ,  url:  '/hospitales'}
      ]

    }
  ];

  constructor() { }
}
