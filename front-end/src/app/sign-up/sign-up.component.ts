import { Component } from '@angular/core';
import { SHA256, enc } from 'crypto-js';
import { AuthService } from '../auth.service';

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
  constructor(private _auth: AuthService ) { }

  ngOnInit(){

  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  /*
  newUser: any;
    userCreationData: any = {
      name: '',
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
  };

  onSignUp(signUpForm: {fName: string, lName: string, username: string, email: string, phoneNumber: string, password: string}) {

    // Combine first and last name
    const name = signUpForm.fName + ' ' + signUpForm.lName;
  
    // Hash password for encryption
    const hashedPassword = SHA256(signUpForm.password).toString(enc.Base64);

    // Set userCreationData fields
    this.userCreationData.name = name;
    this.userCreationData.username = signUpForm.username;
    this.userCreationData.email = signUpForm.email;
    this.userCreationData.phoneNumber = signUpForm.phoneNumber;
    this.userCreationData.password = hashedPassword;

    try {
      // TODO: set serverURL to an environment variable
      this.http.post(`http://localhost:3000/users`,  this.userCreationData)
      .subscribe((res) => {
        console.log('User created successfully:', res);
        // Optionally, we can navigate to another page after successful sign-up
      });
    } catch (err) {
      console.error('An error occurred while making the POST request:', err);
    }
  }
  */
}
