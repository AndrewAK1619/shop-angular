/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageProductDto } from '../models/page-product-dto';
import { PageUserDto } from '../models/page-user-dto';

/**
 * History Controller
 */
@Injectable({
  providedIn: 'root',
})
class HistoryControllerService extends __BaseService {
  static readonly getHistoryProductUsingGETPath = '/api/history/products/{id}';
  static readonly getHistoryUserUsingGETPath = '/api/history/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getHistoryProduct
   * @param params The `HistoryControllerService.GetHistoryProductUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `id`: id
   *
   * @return OK
   */
  getHistoryProductUsingGETResponse(params: HistoryControllerService.GetHistoryProductUsingGETParams): __Observable<__StrictHttpResponse<PageProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/history/products/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageProductDto>;
      })
    );
  }
  /**
   * getHistoryProduct
   * @param params The `HistoryControllerService.GetHistoryProductUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `id`: id
   *
   * @return OK
   */
  getHistoryProductUsingGET(params: HistoryControllerService.GetHistoryProductUsingGETParams): __Observable<PageProductDto> {
    return this.getHistoryProductUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageProductDto)
    );
  }

  /**
   * getHistoryUser
   * @param params The `HistoryControllerService.GetHistoryUserUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `id`: id
   *
   * @return OK
   */
  getHistoryUserUsingGETResponse(params: HistoryControllerService.GetHistoryUserUsingGETParams): __Observable<__StrictHttpResponse<PageUserDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/history/users/${encodeURIComponent(String(params.id))}`,
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
   * getHistoryUser
   * @param params The `HistoryControllerService.GetHistoryUserUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `id`: id
   *
   * @return OK
   */
  getHistoryUserUsingGET(params: HistoryControllerService.GetHistoryUserUsingGETParams): __Observable<PageUserDto> {
    return this.getHistoryUserUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageUserDto)
    );
  }
}

module HistoryControllerService {

  /**
   * Parameters for getHistoryProductUsingGET
   */
  export interface GetHistoryProductUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for getHistoryUserUsingGET
   */
  export interface GetHistoryUserUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;

    /**
     * id
     */
    id: number;
  }
}

export { HistoryControllerService }
