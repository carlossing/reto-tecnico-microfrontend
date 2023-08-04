import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {NxWelcomeComponent} from './nx-welcome.component';
import {APP_CONFIG, AuthenticationModule, AuthenticationService} from "@gnx/authentication";
import {environment} from "../environments/environment";
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    AuthenticationModule,
    SharedPrimeNgModule,
  ],
  providers: [
    AuthenticationService,
    {
      provide: APP_CONFIG,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
