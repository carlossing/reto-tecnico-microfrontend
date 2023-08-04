import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './components/admin/admin.component';
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // SharedPrimeNgModule
  ],
})
export class AdminModule {
}
