import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserEntityResponse, UsersCollectionResponse} from "../models/users.model";
import {Observable} from "rxjs";
import {APP_CONFIG} from "@gnx/app-config";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly USERS_ENDPOINT = this.appConfig.apis.users + '/v1/admin/users';

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient,
  ) {
  }

  getAll(
    // pageIndex: number,
    // pageSize: number,
    // sortField: string | null,
    // sortOrder: string | null,
    // filters: Array<{ key: string; value: string[] }>
  ): Observable<UsersCollectionResponse> {
    const endpoint = this.USERS_ENDPOINT;
    //
    // const params = QueryParamsBuilderUtil.build(pageIndex,
    //   pageSize,
    //   sortField,
    //   sortOrder,
    //   filters);
    // return this.http.get<TestsCollectionResponse>(`${endpoint}`, {params});
    return this.http.get<UsersCollectionResponse>(`${endpoint}`);
  }

  getOne(id: string): Observable<User> {
    const endpoint = `${this.USERS_ENDPOINT}/${id}`;
    return this.http.get<User>(`${endpoint}`);
  }


  create(user: User): Observable<UserEntityResponse> {
    const endpoint = `${this.USERS_ENDPOINT}`;
    return this.http.post<UserEntityResponse>(`${endpoint}`, user);
  }

  update(uuid: string, user: User): Observable<UserEntityResponse> {
    const endpoint = `${this.USERS_ENDPOINT}/${uuid}`;
    return this.http.patch<UserEntityResponse>(`${endpoint}`, user);
  }

  delete(id: string): Observable<UserEntityResponse> {
    const endpoint = `${this.USERS_ENDPOINT}/${id}`;
    return this.http.delete<UserEntityResponse>(`${endpoint}`);
  }

}
