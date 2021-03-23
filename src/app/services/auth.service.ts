import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _loginUrl = '/api/login_check';
  private _logoutUrl = '/api/logout';
  constructor(private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
) { }

loginUser(user: User) {
  return this.http.post<any>(this._loginUrl, user);
 }

 loggedIn() {
   return !!this.cookieService.get('token');
 }

 getToken() {
   return this.cookieService.get('token');
 }

 logout() {
  return this.http.get<any>(this._logoutUrl);
   //this.router.navigate(['login']);
 }
}
