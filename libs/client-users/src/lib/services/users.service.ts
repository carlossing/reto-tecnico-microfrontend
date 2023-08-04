import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "@gnx/authentication";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient,
  ) {
  }



}
