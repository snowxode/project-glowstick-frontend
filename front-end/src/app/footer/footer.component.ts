import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  styles : [`a.active { color: #82ADFF;} a.active + svg path {fill: #82ADFF;}`]
})
export class FooterComponent {

}
