import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpStatusCodeInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((res) => {
        console.log(res);
        if (res.type === 4) {
          if (!res?.body?.ok) {
            console.log('bugggggg');
          }
        }

        // this.loadingService.isLoading$.next(false);
        // console.log("Passed through the interceptor in response");
        // console.log(res);
        return res;
      }),

      catchError((error: HttpErrorResponse) => {
        // // console.log(error);
        // // this.loadingService.isLoading$.next(false);
        let errorMsg = '';
        let title = '';
        // if (error.error instanceof ErrorEvent) {
        //   // console.log("This is client side error");
        //   errorMsg = `Error: ${error.error.message}`;
        // } else {
        //   // console.log("This is server side error");
        //   errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        //   // console.log(errorMsg);
        // }
        //
        // if (error.status === HttpStatusEnum.HTTP_STATUS_UNAUTHORIZED) {
        //
        //   if (!this.isRefreshing) {
        //     this.isRefreshing = true;
        //
        //     if (this.authenticationService.isAuthenticate()) {
        //
        //       request = request.clone({
        //         headers: request.headers.delete('Authorization')
        //       });
        //       const payload: RefreshTokenPayload = this.authenticationService.getRefreshTokenPayload();
        //       return this.authenticationService.refreshToken(payload).pipe(
        //         switchMap((data) => {
        //           this.isRefreshing = false;
        //           this.authenticationService.saveSessionToken(data);
        //           return next.handle(request);
        //         }),
        //         catchError((error) => {
        //           // console.log(error);
        //           this.isRefreshing = false;
        //
        //           if (error.status == 401) {
        //             this.eventBusService.emit({
        //               name: Events.LOGOUT, value: null
        //             });
        //           }
        //
        //           return throwError(() => error);
        //         })
        //       );
        //     }
        //   }
        //
        // }
        //
        // if (error.status === 0) {
        //   errorMsg = 'Error de conexión';
        //   title = 'Error interno';
        // }
        //
        // // console.log(errorMsg);
        // if (error.status === 500) {
        //   errorMsg = error.error.error.message;
        //   title = 'Error interno';
        // }
        //
        // if (error.status === HttpStatusEnum.HTTP_STATUS_BAD_REQUEST) {
        //   errorMsg = error.error.error.message;
        //   title = error.error.error.title;
        //   // console.log(error.error.error);
        //   if (error.error.error === 'invalid_grant') {
        //     errorMsg = 'Usuario o contraseña inválido';
        //     title = 'Error';
        //   }
        //
        //   if (error.error.error.codigo === 8) {
        //     // this.authenticationService.logout();
        //     this.eventBusService.emit({
        //       name: Events.LOGOUT, value: null
        //     });
        //     // errorMsg = 'Usuario o contraseña inválido';
        //     // title = 'Error';
        //   }
        //
        // }
        //
        // if (error.status === 404) {
        //   errorMsg = error.error.error.message;
        //   title = 'Recurso no encontrado';
        // }
        //
        // if (error.status === 409) {
        //   errorMsg = error.error.error.message;
        //   title = 'Recurso duplicado';
        // }
        //
        // if (error.status === 422) {
        //   errorMsg = `${error.error.error.detail.message}`;
        //   title = `${error.error.error.title} - ${error.error.error.message}`;
        // }
        //
        // const modal = this.modalService.error({
        //   nzTitle: title,
        //   nzContent: errorMsg,
        //   nzClosable: true
        // });

        return throwError(errorMsg);
      })
    );
  }
}
