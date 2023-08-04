import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";
import {APP_CONFIG, AuthenticationModule, AuthenticationService} from "@gnx/authentication";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedPrimeNgModule,
    AuthenticationModule,
  ],
  providers: [
    AuthenticationService,
    {
      provide: APP_CONFIG,
      useValue: {
        apiu:''
      }
    }
  ],
})
export class LoginModule {
}
