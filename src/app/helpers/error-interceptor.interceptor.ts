import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authservice.logout();
          location.reload(true);
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }))
}
  }
}