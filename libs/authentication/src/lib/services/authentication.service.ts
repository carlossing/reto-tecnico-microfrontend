import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../../index";
import {Observable} from "rxjs";
import {AuthenticationResponse, GrantTypesEnum, PasswordPayload} from "../models/authentication.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly AUTHENTICATION_ENDPOINT = this.appConfig.apis.authentication;

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient,
  ) {
    console.log(appConfig);
  }

  create(username: string, password: string): Observable<AuthenticationResponse> {

    const endpoint = `${this.AUTHENTICATION_ENDPOINT.url}/auth`;

    const payload: PasswordPayload = {
      grant_type: GrantTypesEnum.PASSWORD,
      username: username,
      password: password,
      client_id: this.AUTHENTICATION_ENDPOINT.payload.client_id,
      client_secret: this.AUTHENTICATION_ENDPOINT.payload.client_secret,
    }
    // this.username = username;
    const headers = {}
    return this.http.post<AuthenticationResponse>(endpoint, payload, {
      headers
    });
  }
}
