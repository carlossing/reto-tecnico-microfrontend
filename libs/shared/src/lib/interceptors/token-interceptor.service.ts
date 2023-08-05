import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../services/local-storage.service';
import {AuthenticationService} from '../services/authentication.service';
import {AuthenticationConstant} from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private localStorage: LocalStorageService,
    // private message: NzMessageService,
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const skipIntercept = request.headers.has('skip');

    // console.log('TokenInterceptor');

    if (skipIntercept) {
      request = request.clone({
        headers: request.headers.delete('skip')
      });
      return next.handle(request);
    }

    if (!this.isAuthenticate()) {

      this.router.navigate(['/auth/login']);
      return next.handle(request);
    }

    const token = this.getToken();

    if (token.length > 0) {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }

  isAuthenticate(): boolean {

    return this.localStorage.get(AuthenticationConstant.AUTH_TOKEN);

  }

  getToken() {
    return this.localStorage.get(AuthenticationConstant.AUTH_TOKEN);
  }
}
