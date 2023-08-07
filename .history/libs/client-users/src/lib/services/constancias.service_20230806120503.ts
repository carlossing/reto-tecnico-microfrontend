import { Inject, Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {APP_CONFIG} from "@gnx/app-config";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConstanciasService {
  private readonly USERS_ENDPOINT =
    this.appConfig.apis.users + '/v1/admin/users';

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient
  ) {}
}
