/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageUserDto } from '../models/page-user-dto';
import { UserDto } from '../models/user-dto';

/**
 * User Controller
 */
@Injectable({
  providedIn: 'root',
})
class UserControllerService extends __BaseService {
  static readonly getPageUserUsingGETPath = '/api/users';
  static readonly saveUserUsingPOSTPath = '/api/users';
  static readonly getUserByIdUsingGETPath = '/api/users/{id}';
  static readonly updateUserUsingPUTPath = '/api/users/{id}';
  static readonly deleteUserByIdUsingDELETEPath = '/api/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getPageUser
   * @param params The `UserControllerService.GetPageUserUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  getPageUserUsingGETResponse(params: UserControllerService.GetPageUserUsingGETParams): __Observable<__StrictHttpResponse<PageUserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageUserDto>;
      })
    );
  }
  /**
   * getPageUser
   * @param params The `UserControllerService.GetPageUserUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  getPageUserUsingGET(params: UserControllerService.GetPageUserUsingGETParams): __Observable<PageUserDto> {
    return this.getPageUserUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageUserDto)
    );
  }

  /**
   * saveUser
   * @param user user
   * @return OK
   */
  saveUserUsingPOSTResponse(user: UserDto): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * saveUser
   * @param user user
   * @return OK
   */
  saveUserUsingPOST(user: UserDto): __Observable<UserDto> {
    return this.saveUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * getUserById
   * @param id id
   * @return OK
   */
  getUserByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * getUserById
   * @param id id
   * @return OK
   */
  getUserByIdUsingGET(id: number): __Observable<UserDto> {
    return this.getUserByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * updateUser
   * @param params The `UserControllerService.UpdateUserUsingPUTParams` containing the following parameters:
   *
   * - `user`: user
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUserUsingPUTResponse(params: UserControllerService.UpdateUserUsingPUTParams): __Observable<__StrictHttpResponse<UserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.user;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/users/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserDto>;
      })
    );
  }
  /**
   * updateUser
   * @param params The `UserControllerService.UpdateUserUsingPUTParams` containing the following parameters:
   *
   * - `user`: user
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUserUsingPUT(params: UserControllerService.UpdateUserUsingPUTParams): __Observable<UserDto> {
    return this.updateUserUsingPUTResponse(params).pipe(
      __map(_r => _r.body as UserDto)
    );
  }

  /**
   * deleteUserById
   * @param id id
   */
  deleteUserByIdUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/users/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * deleteUserById
   * @param id id
   */
  deleteUserByIdUsingDELETE(id: number): __Observable<null> {
    return this.deleteUserByIdUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserControllerService {

  /**
   * Parameters for getPageUserUsingGET
   */
  export interface GetPageUserUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;
  }

  /**
   * Parameters for updateUserUsingPUT
   */
  export interface UpdateUserUsingPUTParams {

    /**
     * user
     */
    user: UserDto;

    /**
     * id
     */
    id: number;
  }
}

export { UserControllerService }