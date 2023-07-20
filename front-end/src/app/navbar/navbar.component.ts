import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles : [`a.active { color: #82ADFF;} a.active + svg path {fill: #82ADFF;}`]
})
export class NavbarComponent {

}
