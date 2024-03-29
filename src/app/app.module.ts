import { NgxsModule } from '@ngxs/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PublicModule } from './components/public/public.module';
import { PrivateModule } from './components/private/private.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
    LayoutModule,

    PrivateModule,
    PublicModule,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "en"
    }),
    NgxsModule.forRoot(),
    HttpClientModule,
    NgxsRouterPluginModule.forRoot(),
    ApiModule.forRoot({
      rootUrl: environment.url
    }),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient);
}
