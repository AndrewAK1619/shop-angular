import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { PageProductDto } from 'src/app/api/models';
import { ProductControllerService } from 'src/app/api/services';
import { GetPageProductAction } from './product.actions';

export class ProductStateModel {
  public pageProduct: PageProductDto;
}

const defaults = {
  pageProduct: {}
};

@State<ProductStateModel>({
  name: 'product',
  defaults
})
@Injectable()
export class ProductState {

  constructor(private readonly productControllerService: ProductControllerService) {}

  @Action(GetPageProductAction)
  getPageProduct({ patchState }: StateContext<ProductStateModel>, { page, size }: GetPageProductAction) {
    return this.productControllerService.getProductPageUsingGET({page, size}).pipe(
      tap( response => patchState({pageProduct: response}) )
      );
  }
}
