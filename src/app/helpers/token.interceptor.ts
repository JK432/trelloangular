import { AuthenticationService } from './../services/authentication.service';
import { Token } from '../interfaces/token';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  data: Token = { 'token': "" }
  constructor(public authenticationService: AuthenticationService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authenticationService.isLoggedIn()) {
      if ('token' in JSON.parse(this.authenticationService.getToken()!)) {
        this.data = (JSON.parse(this.authenticationService.getToken()!) as Token);
        // Now you can safely use token
      }
      this.data = JSON.parse(this.authenticationService.getToken()!)
      let newRequest = request.clone({
        setHeaders: {
          Authorization: `Token ${this.data.token}`,
        },
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
