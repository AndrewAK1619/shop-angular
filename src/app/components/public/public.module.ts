import { ProductModule } from './product/product.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    ProductModule,

    RouterModule.forChild([
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
      }
    ])
  ]
})
export class PublicModule { }
