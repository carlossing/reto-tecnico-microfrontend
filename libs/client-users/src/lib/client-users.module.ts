import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { ConstanciasService } from './services/constancias.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[
    ConstanciasService,
  ]
})
export class ClientUsersModule {
}
