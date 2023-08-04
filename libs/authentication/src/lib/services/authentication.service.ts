import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../../index";

// import {environment as env} from "@env/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
  ) {

    console.log(appConfig);
  }
}
