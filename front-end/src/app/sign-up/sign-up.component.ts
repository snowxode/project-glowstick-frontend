import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(private http: HttpClient) { 

  }

  newUser: any;
    userCreationData: any = {
      name: '',
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
  };
  onSignUp(signUpForm: {fName: string, lName: string, username: string, email: string, phoneNumber: string, password: string}) {
    console.log('Sign up button clicked');
    console.log(signUpForm);

    const name = signUpForm.fName + ' ' + signUpForm.lName;
    
    this.userCreationData.name = name;
    this.userCreationData.username = signUpForm.username;
    this.userCreationData.email = signUpForm.email;
    this.userCreationData.phoneNumber = signUpForm.phoneNumber;

    // TODO: encrypt password
    this.userCreationData.password = signUpForm.password;

    console.log(this.userCreationData);

    // TODO: set serverURL to an environment variable
    this.http.post(`http://localhost:3000/users`,  this.userCreationData)
    .subscribe((res) => {
      console.log(res);
    });
  }
}
