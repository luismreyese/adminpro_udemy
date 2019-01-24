import { Injectable } from '@angular/core';
import { XhrFactory } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

subirArchivo(archivo: File, tipo: string, id: string ) {

const formData = new FormData();
const xhr = new XMLHttpRequest();
const url = `${URL_SERVICES}/upload/${tipo}/${id}`;

console.log(url);

return new Promise ( (resolve, reject) => {
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Configuracion de AJAX para la transmision de archivos
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++
       formData.append( 'archivo', archivo, archivo.name);
       xhr.onreadystatechange = () => {
  if ( xhr.readyState === 4 ) {
   if ( xhr.status === 200 ) {
     console.log('Upload OK');
     resolve( JSON.parse(xhr.response));
   } else {
    console.log('Upload Fail');
    reject( xhr.response );
   }
  }
 };
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
 xhr.open('PUT', url, true);
 xhr.send(formData);
} );


}
}
