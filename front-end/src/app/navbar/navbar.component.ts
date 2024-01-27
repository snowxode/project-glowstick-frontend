import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles : [`a.active { color: #82ADFF;} a.active + svg path {fill: #82ADFF;}`]
})
export class NavbarComponent {
  
    constructor(private _authService: AuthService,
                private _router: Router) { }
  
    authService = this._authService;
    router = this._router;
    isOpen = false;

    openNav() {
      this.isOpen = true;
      console.log("here");
    }

    closeNav() {
      this.isOpen = false;
    }
}
