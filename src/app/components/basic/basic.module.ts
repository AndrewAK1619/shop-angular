import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './state/product.state';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([ProductState]),
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class BasicModule { }
