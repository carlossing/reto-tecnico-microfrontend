import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../../index";
import {Observable} from "rxjs";
import {
  AuthenticationConstant,
  AuthenticationResponse,
  GrantTypesEnum,
  PasswordPayload
} from "../models/authentication.model";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "@gnx/shared";
import {Router} from "@angular/router";
import * as crypto from "crypto-js";
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly AUTHENTICATION_ENDPOINT = this.appConfig.apis.authentication;
  username = '';

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient,
    private jwtService: JwtService,
    private localStorage: LocalStorageService,
    private router: Router,
  ) {
    console.log(appConfig);
  }

  create(username: string, password: string): Observable<AuthenticationResponse> {

    const endpoint = `${this.AUTHENTICATION_ENDPOINT}/auth`;

    const payload: PasswordPayload = {
      grant_type: GrantTypesEnum.PASSWORD,
      username: username,
      password: password,
      client_id: this.appConfig.client_id,
      client_secret: this.appConfig.client_secret,
    }
    this.username = username;
    const headers = {}
    return this.http.post<AuthenticationResponse>(endpoint, payload, {
      headers
    });
  }

  validateResponse(response: AuthenticationResponse) {
    if (response.expires_in) {
      const token = response.access_token;
      const decodeToken = this.jwtService.decodeToken(token);

      if (decodeToken.aud === this.appConfig.client_id
        && decodeToken.sub === this.username
      ) {
        this.saveSessionToken(response);
        return true;
      }
    }
    return false;
  }

  isAuthenticate(): boolean {

    if (!this.localStorage.get(AuthenticationConstant.AUTH_TOKEN)) {
      return false;
    }
    return true;
  }

  saveSessionToken(authenticationResponse: AuthenticationResponse | undefined) {
    if (authenticationResponse) {
      this.localStorage.set(AuthenticationConstant.EXPIRES_IN, authenticationResponse.expires_in);
      this.localStorage.set(AuthenticationConstant.AUTH_TOKEN, authenticationResponse.access_token);
      this.localStorage.set(AuthenticationConstant.AUTH_TOKEN_HASH, crypto.SHA256(authenticationResponse.access_token).toString());
      this.localStorage.set(AuthenticationConstant.AUTH_REFRESH_TOKEN, authenticationResponse.refresh_token || '');
    }
  }
}
