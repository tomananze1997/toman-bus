import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutUsComponent, ContactUsComponent, HomepageComponent, PrivacyPolicyComponent } from '@pages';
import { DropdownModule } from 'primeng/dropdown';

import {
  ContentPrivacyPolicyComponent,
  FleetComponent,
  FooterComponent,
  HeroComponent,
  LanguagePickerComponent,
  LuxuryComponent,
  NavigationComponent,
  OurServicesComponent,
  PartnersComponent,
  ServiceCardComponent,
  WhoWeAreComponent
} from '@components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomepageComponent,
    NavigationComponent,
    FooterComponent,
    LanguagePickerComponent,
    HeroComponent,
    WhoWeAreComponent,
    OurServicesComponent,
    ServiceCardComponent,
    FleetComponent,
    PartnersComponent,
    LuxuryComponent,
    PrivacyPolicyComponent,
    ContentPrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    DropdownModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
