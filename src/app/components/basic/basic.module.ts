import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './state/product.state';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([ProductState]),
  ],
  exports: [
    ProductsComponent
  ]
})
export class BasicModule { }
