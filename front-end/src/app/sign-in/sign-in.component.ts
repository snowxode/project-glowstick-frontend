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


  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      (      res: { token: string; }) => {
        console.log(res)
        localStorage.setItem('token', res.token)
        
        // Navigate to home page
        this._router.navigate(['/home'])
      },
      (      err: any) => console.log(err)
    )
  }

}
