import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {remoteRoutes} from './entry.routes';
import {APP_CONFIG} from "@gnx/app-config";
import {environment} from "../../environments/environment";

@NgModule({
  declarations: [RemoteEntryComponent, ],
  imports: [
    CommonModule,
    RouterModule.forChild(remoteRoutes)
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: environment
    }
  ],
})
export class RemoteEntryModule {
}
