import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersHomeComponent} from "./components/users-home/users-home.component";
import {SharedModule} from "@gnx/shared";
import {ClientUsersModule, UsersService} from "@gnx/client-users";

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
    UsersService,
  ]
})
export class UsersModule {
}
