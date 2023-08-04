import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {NxWelcomeComponent} from './nx-welcome.component';
import {APP_CONFIG, AuthenticationModule, AuthenticationService} from "@gnx/authentication";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    AuthenticationModule
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
