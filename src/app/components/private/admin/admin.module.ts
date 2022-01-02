import { ProductAdminModule } from './product-admin/product-admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductAdminModule,

    RouterModule.forChild([
      {
        path: 'products',
        loadChildren: () => import('./product-admin/product-admin.module').then(module => module.ProductAdminModule)
      }
    ])
  ]
})
export class AdminModule { }
