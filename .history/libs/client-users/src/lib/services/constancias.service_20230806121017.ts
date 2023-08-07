import { Inject, Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {APP_CONFIG} from "@gnx/app-config";
import { HttpClient } from '@angular/common/http';
import { ConstanciaCollectionResponse } from '../models/constancia.model';

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

  byUser(
    // pageIndex: number,
    // pageSize: number,
    // sortField: string | null,
    // sortOrder: string | null,
    // filters: Array<{ key: string; value: string[] }>
  ): Observable<ConstanciaCollectionResponse> {
    const endpoint = `${this.USERS_ENDPOINT}` ;
    //
    // const params = QueryParamsBuilderUtil.build(pageIndex,
    //   pageSize,
    //   sortField,
    //   sortOrder,
    //   filters);
    // return this.http.get<TestsCollectionResponse>(`${endpoint}`, {params});
    return this.http.get<ConstanciaCollectionResponse>(`${endpoint}`);
  }
}
