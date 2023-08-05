import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersResponse} from "../models/users.model";
import {Observable} from "rxjs";
import {APP_CONFIG} from "@gnx/app-config";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly USERS_ENDPOINT = this.appConfig.apis.users;

  constructor(
    @Inject(APP_CONFIG) private appConfig: any,
    private http: HttpClient,
  ) {
  }


  // UsersResponse

  getAll(
    // pageIndex: number,
    // pageSize: number,
    // sortField: string | null,
    // sortOrder: string | null,
    // filters: Array<{ key: string; value: string[] }>
  ): Observable<UsersResponse> {
    const endpoint = this.USERS_ENDPOINT;
    //
    // const params = QueryParamsBuilderUtil.build(pageIndex,
    //   pageSize,
    //   sortField,
    //   sortOrder,
    //   filters);
    // return this.http.get<TestsCollectionResponse>(`${endpoint}`, {params});
    return this.http.get<UsersResponse>(`${endpoint}`);
  }
}
