import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class JwtService  extends JwtHelperService{

  constructor() {
    super();
  }
}
