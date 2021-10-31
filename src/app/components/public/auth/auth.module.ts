import { MatButtonModule } from '@angular/material/button';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
  // --- Poniżej przykład dodatkowo z importem dzieci ---
  // ,
  // {
  //   path: 'prefix-link',
  //   loadChildren: () => import('./sciezka-do-modulu').then(module => module.NAZWA_KLASY_MODULU)
  // }
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule, // będziemy wykorzystywać formGroupa z reaktywnymi formularzami
    FormlyModule, // będziemy generować formularze za pmocą formly
    FormlyMaterialModule, // korzystając z formly będziemy dociągać kontrolki materialowe
    MatInputModule, // kontrolki do imputów
    MatButtonModule, // kontrolki do buttonów
    FormlyMatDatepickerModule,  // w formly datepicker
    MatNativeDateModule, // w formly datepicker
  ]
})
export class AuthModule { }
