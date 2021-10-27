/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Mail Controller
 */
@Injectable({
  providedIn: 'root',
})
class MailControllerService extends __BaseService {
  static readonly getMailUsingGETPath = '/api/mails';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getMail
   * @param mailType mailType
   */
  getMailUsingGETResponse(mailType: 'INVITE' | 'ITERATION' | 'REMINDER' | 'REQUEST' | 'RESPONSE'): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (mailType != null) __params = __params.set('mailType', mailType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/mails`,
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
   * getMail
   * @param mailType mailType
   */
  getMailUsingGET(mailType: 'INVITE' | 'ITERATION' | 'REMINDER' | 'REQUEST' | 'RESPONSE'): __Observable<null> {
    return this.getMailUsingGETResponse(mailType).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module MailControllerService {
}

export { MailControllerService }
