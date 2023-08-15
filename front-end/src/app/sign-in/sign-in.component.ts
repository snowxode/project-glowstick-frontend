import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private _auth: AuthService) { }

  loginUserData = {
    username: '',
    password: ''
  }

  ngOnInit(){

  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
