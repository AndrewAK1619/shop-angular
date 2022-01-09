import { TokenInterceptor } from './token.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_ADMIN']
        }
      }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class PrivateModule { }
