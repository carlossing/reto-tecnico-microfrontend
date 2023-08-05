import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {SharedPrimeNgModule} from "@gnx/shared-prime-ng";
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    SharedPrimeNgModule,
    CKEditorModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
