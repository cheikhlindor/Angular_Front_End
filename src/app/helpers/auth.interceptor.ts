import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url !== 'http://localhost/OutingProject/public/authentication_token') {
const token = localStorage.getItem('token');
request = request.clone({
  setHeaders: {
  Authorization: 'Bearer ' + token
  }
});
}
return next.handle(request);
}
  
}
