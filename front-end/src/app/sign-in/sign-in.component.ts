import { Component, } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  constructor(private _auth: AuthService,
              private _router: Router) { }


  loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]), // Add Validators.required for username
      password: new FormControl('', [Validators.required]) // Add Validators.required for password
    });


  loginUser() {
    if (this.loginForm.valid) {
      this._auth.loginUser(this.loginForm.value)
      .subscribe(
        ( res: { token: string; }) => {
          localStorage.setItem('token', res.token)
          // Navigate to home page
          this._router.navigate(['/home'])
        },
        ( err: any) => {
          this.errorMsg = err.statusText +' - '+ err.error;
          this.showAlert();
        }
      );
    }
    else {
      this.errorMsg = "Please enter a username / password";
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
