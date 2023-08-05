import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {RemoteEntryComponent} from './entry.component';
import {remoteRoutes} from './entry.routes';
import {APP_CONFIG, AppConfigModule} from "@gnx/app-config";
import {environment} from "../../environments/environment";
import {SharedModule} from "@gnx/shared";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes),
    SharedModule,
    AppConfigModule,
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
