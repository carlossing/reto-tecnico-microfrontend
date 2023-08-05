import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./services/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedPrimeNgModule,
  ],
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ],
  providers: [
    AuthenticationService,
  ]

})
export class SharedModule {
}
