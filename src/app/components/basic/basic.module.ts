import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class BasicModule { }
