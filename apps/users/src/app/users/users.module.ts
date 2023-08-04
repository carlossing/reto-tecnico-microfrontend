import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersHomeComponent} from "./components/users-home/users-home.component";

@NgModule({
  declarations: [UsersHomeComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {
}
