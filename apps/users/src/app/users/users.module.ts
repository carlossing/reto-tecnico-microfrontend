import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersHomeComponent} from "./components/users-home/users-home.component";
import {SharedModule} from "@gnx/shared";

@NgModule({
  declarations: [UsersHomeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
})
export class UsersModule {
}
