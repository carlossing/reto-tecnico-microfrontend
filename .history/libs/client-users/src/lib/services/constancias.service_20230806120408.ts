import { Injectable } from '@angular/core';

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
