import { Component, OnInit } from '@angular/core';

import { UserService, ModalserviceService, SubirArchivoService } from 'src/app/services/services.index';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {
  imagen: string;
  imagenTmp: any;
  constructor( public _serviceUpload: ModalserviceService, private _usrService: UserService,
               private _serviceSubirArchivo: SubirArchivoService) {

  }

  ngOnInit() {

  this.imagen = this._serviceUpload.imagen;
  }
  cerrarModal() {
    this.imagen = null;
    this.imagenTmp = null;
    this._serviceUpload.ocultarModal();
  }
    setArchivo( formato ) {
    let archivo: File;
    const reader = new FileReader();
    archivo = formato.target.files[0];

  //  console.log( archivo );

    if ( !archivo ) {
      return; }
    this._serviceUpload.archivo = archivo;

    const UrlTmpImage = reader.readAsDataURL( archivo );

    reader.onloadend = () => {
                                this._serviceUpload.imagenTmp = reader.result;
                                this.imagenTmp = this._serviceUpload.imagenTmp;
                             };
    //  this.imagen    = this._serviceUpload.usuario.img;
    // console.log( this.archivo );
    // console.log( this.imagen );
   }

subirArchivo() {
  this._serviceSubirArchivo.subirArchivo(this._serviceUpload.archivo, this._serviceUpload.tipo,
                                         this._serviceUpload.id).then(
  (resp) => {
     this._serviceUpload.notificacion.emit( resp );
     this.cerrarModal();
  } )
  .catch( (error) => {
    console.log('error en la carga de archivo', error);
  } );
}
}

