import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { AuthService } from './auth.service';


//const post = 'http://localhost/OutingProject/public/register';
const post = '/api/register'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private users: User[] = [  ];
  headers: HttpHeaders;
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': this.auth.getToken()
    })
  };
  userSubject = new Subject<User[]>();
  constructor(private http: HttpClient, private auth: AuthService) { const token = localStorage.getItem('token'); 
  this.headers = new HttpHeaders ().set('Authorization', 'Bearer'+token)}
 
 
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');

    }


    addUser(user: User): Observable<any> {
      console.log(user);
          return this.http.post(post, user, {headers: this.headers}).pipe(
          catchError(this.handleError)
        );}
}
