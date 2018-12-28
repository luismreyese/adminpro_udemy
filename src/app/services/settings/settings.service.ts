import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

private ajustes: Ajuste = {
 temaUrl: 'assets/css/colors/default.css',
 tema: 'default'
};

  constructor(@Inject(DOCUMENT) private _document) {
    this.recuperarAjustes();
   }

  guardarAjustes() {
    localStorage.setItem('temas', JSON.stringify(this.ajustes));
  }

  recuperarAjustes() {
    if (localStorage.getItem('temas')) {
     this.ajustes = JSON.parse( localStorage.getItem('temas'));
     this.setAjustes(this.ajustes.tema);
    } else {
      this.guardarAjustes();
    }
  }

  setAjustes(color: string ) {
    this.ajustes.temaUrl = `assets/css/colors/${color}.css`;
    this._document.getElementById('tema').setAttribute('href', this.ajustes.temaUrl );
    this.ajustes.tema = color;
    this.guardarAjustes();
  }

  retAjuste(): Ajuste {
   return this.ajustes;
  }

}

interface Ajuste {
  temaUrl: string;
  tema: string;
}
