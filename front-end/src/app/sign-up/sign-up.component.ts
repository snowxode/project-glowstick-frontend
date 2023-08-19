import { Component } from '@angular/core';
import { SHA256, enc } from 'crypto-js';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  registerUserData = {
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
  }
  constructor(private _auth: AuthService, 
              private _router: Router) { }

  ngOnInit(){

  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)

        // Navigate to home page
        this._router.navigate(['/home'])
      },
      err => console.log(err)
    )
  }
}
