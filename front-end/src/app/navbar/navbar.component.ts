import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles : [`a.active { color: #82ADFF;} a.active + svg path {fill: #82ADFF;}`]
})
export class NavbarComponent {
  
    constructor(private _authService: AuthService) { }
  
    authService = this._authService;
}
