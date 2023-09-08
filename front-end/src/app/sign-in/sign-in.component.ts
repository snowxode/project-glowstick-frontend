import { Component, } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  constructor(private _auth: AuthService, private _router: Router, private _cookies: CookieService) { }

  // Create a form group for the sign in form
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]) 
  });

  
  loginUser() {
    // If the form is valid, login the user with the backend
    if (this.loginForm.valid) {
      this._auth.loginUser(this.loginForm.value)
      .subscribe(
        ( res: { token: string, userID: string }) => {
          // Store the login token in local storage
          localStorage.setItem('token', res.token)

          // Store the userID in cookies
          this._cookies.set('userID', res.userID);

          // Navigate to home page
          this._router.navigate(['/home'])
        },
        ( err: any) => {
          // If there is an error on the backend, show an error message
          this.errorMsg = err.statusText +' - '+ err.error;
          this.showAlert();
        }
      );
    }
    // If the form is invalid, show an error message
    else {
      if (this.loginForm.controls.username.getError('required')){
        this.errorMsg = "Please enter a username";
      }
      else if (this.loginForm.controls.password.getError('required')){
        this.errorMsg = "Please enter a password";
      }
      this.showAlert();
    }
  }

  // Alert variables
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

  // Hide the alert (when the x is clicked)
  closeAlert(){this.alertIsHidden = true;}
}
