import { ProductAdminComponent } from './product-admin/product-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListAdminComponent } from './product-list-admin/product-list-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicModule } from 'src/app/components/basic/basic.module';

const routes: Routes = [
  {
    path: '',
    component: ProductAdminComponent,
    children: [
      {
        path: 'list',
        component: ProductListAdminComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductAdminComponent,
    ProductListAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BasicModule
  ]
})
export class ProductAdminModule { }
