import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen',
  pure: false,
})
export class ImagenPipe implements PipeTransform {
  transform( img: string = 'xxxxx', tipo: string = 'usuario' ): any {

    let url = `${URL_SERVICES}/img`;
  if (img === null || img === undefined) { img = 'XXX'; }
   if (img.indexOf('https') >= 0) {
    return img;
   }
   switch (tipo) {
     case 'usuario':
     url += '/usuarios/' + img;
       break;
       case 'medico':
       url += '/medicos/' + img;
       break;
       case 'hospital':
       url += '/hospitales/' + img;
       break;
     default:
       url += '/usuarios/' + img;
       console.log('imagen no encontrada - ruta no valida');
       break;
   }
   return url;
  }
}
