/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * File Controller
 */
@Injectable({
  providedIn: 'root',
})
class FileControllerService extends __BaseService {
  static readonly getFileByStandardUsingGETPath = '/api/files';
  static readonly getFileByGenericUsingGETPath = '/api/files/generic';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getFileByStandard
   * @param fileType fileType
   */
  getFileByStandardUsingGETResponse(fileType: 'CSV' | 'PDF' | 'XLS' | 'DOC' | 'JSON'): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (fileType != null) __params = __params.set('fileType', fileType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/files`,
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
   * getFileByStandard
   * @param fileType fileType
   */
  getFileByStandardUsingGET(fileType: 'CSV' | 'PDF' | 'XLS' | 'DOC' | 'JSON'): __Observable<null> {
    return this.getFileByStandardUsingGETResponse(fileType).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * getFileByGeneric
   * @param fileType fileType
   * @return OK
   */
  getFileByGenericUsingGETResponse(fileType: 'CSV' | 'PDF' | 'XLS' | 'DOC' | 'JSON'): __Observable<__StrictHttpResponse<ArrayBuffer>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (fileType != null) __params = __params.set('fileType', fileType.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/files/generic`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'arraybuffer'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArrayBuffer>;
      })
    );
  }
  /**
   * getFileByGeneric
   * @param fileType fileType
   * @return OK
   */
  getFileByGenericUsingGET(fileType: 'CSV' | 'PDF' | 'XLS' | 'DOC' | 'JSON'): __Observable<ArrayBuffer> {
    return this.getFileByGenericUsingGETResponse(fileType).pipe(
      __map(_r => _r.body as ArrayBuffer)
    );
  }
}

module FileControllerService {
}

export { FileControllerService }
