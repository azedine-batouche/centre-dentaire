import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from 'src/modules/core/components/contact/contact.component';
import { FooterComponent } from 'src/modules/core/components/footer/footer.component';
import { HeaderComponent } from 'src/modules/core/components/header/header.component';
import { ReferencesComponent } from 'src/modules/core/components/references/references.component';
import { FormComponent } from 'src/modules/shared/components/form/form.component';
import { MapComponent } from 'src/modules/shared/components/map/map.component';
import { TitleComponent } from 'src/modules/shared/components/title/title.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/modules/core/components/home/home.component';
import { GestionComponent } from 'src/modules/core/components/gestion/gestion.component';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReferencesComponent,
    ContactComponent,
    MapComponent,
    TitleComponent,
    FormComponent,
    HomeComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage:'fr-FR',
      loader:{
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
