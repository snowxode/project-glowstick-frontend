import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from './../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // @ts-ignore
  private _registerUrl = `${environment.API_URL}auth/register`;
  // @ts-ignore
  private _loginUrl = `${environment.API_URL}auth/login`;

  constructor(private http: HttpClient,
              private _router: Router, private _cookies: CookieService) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._cookies.delete('userID');
    this._router.navigate(['/home']);
  }
  
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
