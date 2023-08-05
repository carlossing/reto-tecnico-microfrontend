import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UsersCollectionResponse} from "../models/users.model";
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
    console.log(appConfig);
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
    //
    // const params = QueryParamsBuilderUtil.build(pageIndex,
    //   pageSize,
    //   sortField,
    //   sortOrder,
    //   filters);
    // return this.http.get<TestsCollectionResponse>(`${endpoint}`, {params});
    return this.http.get<User>(`${endpoint}`);
  }
}
