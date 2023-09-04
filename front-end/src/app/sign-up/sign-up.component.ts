import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { EmailValidator, FormControl, FormGroup, Validators} from '@angular/forms';
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

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]), 
    username: new FormControl('', [Validators.required]), 
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]{6,}')]), 
    password: new FormControl('', [Validators.required])
  });

  registerUser() {
    if (this.signUpForm.valid) {
      this._auth.registerUser(this.signUpForm.value)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)

          // Navigate to home page
          this._router.navigate(['/home'])
        },
        err => {
          this.errorMsg = err.statusText +' - '+ err.error;
          this.showAlert();
        }
      )
    }
    else{
      if (this.signUpForm.controls.name.getError('required')){
        this.errorMsg = "Please enter your name";
      }
      else if (this.signUpForm.controls.username.getError('required')){
        this.errorMsg = "Please enter a username";
      }
      else if (this.signUpForm.controls.email.getError('required')){
        this.errorMsg = "Please enter an email address";
      }
      else if (this.signUpForm.controls.email.getError('email')){
        this.errorMsg = "Please enter a valid email address";
      }
      else if (this.signUpForm.controls.phoneNumber.getError('required')){
        this.errorMsg = "Please enter a phone number";
      }
      else if (this.signUpForm.controls.phoneNumber.getError('pattern')){
        this.errorMsg = "Please enter a valid phone number";
      }
      else if (this.signUpForm.controls.password.getError('required')){
        this.errorMsg = "Please enter a password";
      }
      
      this.showAlert();
    }
  }

  alertIsHidden: boolean = true;
  errorMsg: string = ""

  showAlert(){
    // If the alert is already there, do nothing
    if (!this.alertIsHidden){
      return
    }
    // If the alert is hidden, show it
    this.alertIsHidden = false;
    return
  }
  closeAlert(){this.alertIsHidden = true;}
}
