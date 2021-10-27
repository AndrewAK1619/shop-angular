/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageProductDto } from '../models/page-product-dto';
import { ProductDto } from '../models/product-dto';

/**
 * Product Controller
 */
@Injectable({
  providedIn: 'root',
})
class ProductControllerService extends __BaseService {
  static readonly getPageUsingGETPath = '/api/products';
  static readonly saveProductUsingPOSTPath = '/api/products';
  static readonly getProductByIdUsingGETPath = '/api/products/{id}';
  static readonly updateProductUsingPUTPath = '/api/products/{id}';
  static readonly deleteProductByIdUsingDELETEPath = '/api/products/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getPage
   * @param params The `ProductControllerService.GetPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  getPageUsingGETResponse(params: ProductControllerService.GetPageUsingGETParams): __Observable<__StrictHttpResponse<PageProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products`,
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
   * getPage
   * @param params The `ProductControllerService.GetPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  getPageUsingGET(params: ProductControllerService.GetPageUsingGETParams): __Observable<PageProductDto> {
    return this.getPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageProductDto)
    );
  }

  /**
   * saveProduct
   * @param productDto productDto
   * @return OK
   */
  saveProductUsingPOSTResponse(productDto: ProductDto): __Observable<__StrictHttpResponse<ProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productDto;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDto>;
      })
    );
  }
  /**
   * saveProduct
   * @param productDto productDto
   * @return OK
   */
  saveProductUsingPOST(productDto: ProductDto): __Observable<ProductDto> {
    return this.saveProductUsingPOSTResponse(productDto).pipe(
      __map(_r => _r.body as ProductDto)
    );
  }

  /**
   * getProductById
   * @param id id
   * @return OK
   */
  getProductByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDto>;
      })
    );
  }
  /**
   * getProductById
   * @param id id
   * @return OK
   */
  getProductByIdUsingGET(id: number): __Observable<ProductDto> {
    return this.getProductByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as ProductDto)
    );
  }

  /**
   * updateProduct
   * @param params The `ProductControllerService.UpdateProductUsingPUTParams` containing the following parameters:
   *
   * - `productDto`: productDto
   *
   * - `id`: id
   *
   * - `file`: file
   *
   * @return OK
   */
  updateProductUsingPUTResponse(params: ProductControllerService.UpdateProductUsingPUTParams): __Observable<__StrictHttpResponse<ProductDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.productDto != null) { __formData.append('productDto', JSON.stringify(params.productDto));}

    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/products/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductDto>;
      })
    );
  }
  /**
   * updateProduct
   * @param params The `ProductControllerService.UpdateProductUsingPUTParams` containing the following parameters:
   *
   * - `productDto`: productDto
   *
   * - `id`: id
   *
   * - `file`: file
   *
   * @return OK
   */
  updateProductUsingPUT(params: ProductControllerService.UpdateProductUsingPUTParams): __Observable<ProductDto> {
    return this.updateProductUsingPUTResponse(params).pipe(
      __map(_r => _r.body as ProductDto)
    );
  }

  /**
   * deleteProductById
   * @param id id
   */
  deleteProductByIdUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/products/${encodeURIComponent(String(id))}`,
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
   * deleteProductById
   * @param id id
   */
  deleteProductByIdUsingDELETE(id: number): __Observable<null> {
    return this.deleteProductByIdUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ProductControllerService {

  /**
   * Parameters for getPageUsingGET
   */
  export interface GetPageUsingGETParams {

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
   * Parameters for updateProductUsingPUT
   */
  export interface UpdateProductUsingPUTParams {

    /**
     * productDto
     */
    productDto: ProductDto;

    /**
     * id
     */
    id: number;

    /**
     * file
     */
    file?: Blob;
  }
}

export { ProductControllerService }
