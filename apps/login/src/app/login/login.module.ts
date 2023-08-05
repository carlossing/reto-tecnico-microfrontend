import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";
import {SharedModule} from "@gnx/shared";
import {AppConfigModule} from "@gnx/app-config";


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedPrimeNgModule,
    SharedModule,
    AppConfigModule,
  ],
  providers: [],
})
export class LoginModule {
}

