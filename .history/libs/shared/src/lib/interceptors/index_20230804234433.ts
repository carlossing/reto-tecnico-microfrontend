import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './token-interceptor.service';


export const httpInterceptorProviders = [
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: ErrorInterceptor,
  //   multi: true
  // },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
];
