import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { SharedModule } from '@gnx/shared';
import { ClientUsersModule, UsersService } from '@gnx/client-users';
import { httpInterceptorProviders } from '../../../../../libs/shared/src/lib/interceptors';
import { SharedPrimeNgModule } from '@gnx/shared-prime-ng';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersContainerComponent } from './components/users-container/users-container.component';
import {ReactiveFormsModule} from "@angular/forms";

// console.log(environment);
@NgModule({
  declarations: [
    UsersHomeComponent,
    UsersDetailComponent,
    UsersContainerComponent,
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        SharedPrimeNgModule,
        ClientUsersModule,
        ReactiveFormsModule,
    ],
  providers: [
    // {
    //   provide: APP_CONFIG,
    //   useValue: environment
    // },
    httpInterceptorProviders,
    UsersService,
  ],
})
export class UsersModule {}
