import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {

  usuario: Usuario;
  oculto: string = 'oculto';
  imagen: string = 'XXX';
  imagenTmp: any;
  id: string;
  tipo: string;
  archivo: File;

  public notificacion = new EventEmitter<any>();

  constructor() { }

  ocultarModal() {
    this.oculto = 'oculto';
    this.imagen = null;
    this.imagenTmp = null;
    this.id = null;
    this.tipo = null;
  }
  mostarModal(tipo: string, id: string) {
   this.oculto   = '';
    this.id      = id;
    this.tipo    = tipo;
  }
}
