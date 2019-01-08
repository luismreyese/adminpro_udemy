import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/services.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private _service: UserService, private _router:Router) { }

  ngOnInit() {
  }

  logOut() {
    this._service.logout();
    this._router.navigate(['/login']);
  }
}
