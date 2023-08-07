import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";
import {SharedModule} from "@gnx/shared";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking'
    }),
    SharedModule,
    SharedPrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
