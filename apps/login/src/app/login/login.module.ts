import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";
import {SharedModule} from "@gnx/shared";

console.log('aaaaaaaaaaaa');

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedPrimeNgModule,
    SharedModule,
  ],
  providers: [],
})
export class LoginModule {
}

console.log('bbbbbbbbbbb');
