import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersHomeComponent} from "./components/users-home/users-home.component";
import {SharedModule} from "@gnx/shared";
import {ClientUsersModule, UsersService} from "@gnx/client-users";
import {httpInterceptorProviders} from "../../../../../libs/shared/src/lib/interceptors";

// console.log(environment);
@NgModule({
  declarations: [UsersHomeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ClientUsersModule,
  ],
  providers: [
    // {
    //   provide: APP_CONFIG,
    //   useValue: environment
    // },
    httpInterceptorProviders,
    UsersService,
  ]
})
export class UsersModule {
}
