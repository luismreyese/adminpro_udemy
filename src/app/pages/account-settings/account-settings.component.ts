import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( private _srvAjuste: SettingsService) { }

  ngOnInit() {
    this.checkInit();
  }
  cambiarcolor(color: string , link: any) {
    this.cambiarcheck(link);
    this._srvAjuste.setAjustes(color);
  }
  cambiarcheck( link: any) {
   const selectores: any = document.getElementsByClassName('selector');

   for (const selector of selectores ) {
    selector.classList.remove('working');
   }
link.classList.add('working');
  }

  checkInit() {
    const selectores: any = document.getElementsByClassName('selector');
    const ajuste = this._srvAjuste.retAjuste();
    const tematmp = ajuste.tema;

    for (const ref of selectores ) {
      ref.classList.remove('working');
     }

    // tslint:disable-next-line:prefer-const
    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tematmp ) {
        ref.classList.add('working');
      break;
       }
    }
   }

}
