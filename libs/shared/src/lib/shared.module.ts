import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";

@NgModule({
  imports: [
    CommonModule,
    SharedPrimeNgModule,
  ],
  declarations: [MenuComponent],
  exports: [
    MenuComponent
  ]
})
export class SharedModule {
}
