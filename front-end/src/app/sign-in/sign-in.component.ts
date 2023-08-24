import { Component, } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{

  constructor(private _auth: AuthService,
              private _router: Router) { }

  loginUserData = {
    username: '',
    password: ''
  }

  show_flash = false;
  flashMessage = "testing";


  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      ( res: { token: string;}) => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home'])

      },
      ( err: any) => {
        this.flashMessage = ("Unauthorized: " + err.error) 
        this.show_flash = true
      }
    )
  }

}
