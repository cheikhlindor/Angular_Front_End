import { Injectable, Input } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { Observable, pipe, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Sortie } from '../interfaces/sortie';
import { SearchData } from '../interfaces/search-data';
import { AuthService } from './auth.service';


const endpoint = '/api/liste';
const _endpoint = '/api/sortie/';
const post = '/api/sortie/ajout';
@Injectable({
  providedIn: 'root'
})

/*https://jasonwatmore.com/post/2018/11/16/angular-7-jwt-authentication-example-tutorial#:~:text=Angular%207%20JWT%20Interceptor&text=The%20JWT%20Interceptor%20intercepts%20http,part%20of%20the%20new%20HttpClientModule.**/
export class ServicesortieService {
  
  @Input()
  searchdata!: SearchData;
  headers: HttpHeaders ;
  constructor(private http: HttpClient, private auth: AuthService) {const token = localStorage.getItem('token'); 
  this.headers = new HttpHeaders ().set('Authorization', 'Bearer'+token)}
 /* httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': this.auth.getToken()
    })
  };*/
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
  getSorties(searchdata: SearchData ): Observable<any> {
       return this.http.get<Sortie>(endpoint, {headers: this.headers})
    //.map((resp: { json: () => any; }) => resp.json())
    .pipe(
      catchError(this.handleError)
    );
  }
  getSortie(id: number): Observable<any> {
    return this.http.get<Sortie>(_endpoint+id,{headers: this.headers}).pipe(
      catchError(this.handleError)
    );}
  
  addSortie(sortie: Sortie): Observable<any> {
        return this.http.post(post, sortie, {headers: this.headers}).pipe(
        catchError(this.handleError)
      );}

  updateSortie(id: number, sortie: Sortie): Observable<any> {
        return this.http.put<Sortie>(endpoint + 'sortie/updatesortie/' + id, sortie,{headers: this.headers}).pipe(
          catchError(this.handleError)
        );
      }
  deleteSortie(id: number): Observable<any> {
        return this.http.delete<Sortie>(endpoint + 'sortie/cancel/' + id,{headers: this.headers}).pipe(
          catchError(this.handleError)
        );
      }
    
}
