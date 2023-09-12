import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginRoute() {
    return window.location.pathname.includes('sign-in') || window.location.pathname.includes('sign-up');
  }
  signIn(){
    return window.location.pathname.includes('sign-in');
  }
}

