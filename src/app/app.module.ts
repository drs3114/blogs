import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {BodyComponent} from './component/body/body.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatCardModule} from '@angular/material/card';
import {NavComponent} from './component/nav/nav.component';
import {ContentComponent} from './component/content/content.component';
import {AboutMeComponent} from './component/about-me/about-me.component';
import {HomeComponent} from './component/home/home.component';
import {ContentHeaderComponent} from './component/content-header/content-header.component';
import {ContentBodyComponent} from './component/content-body/content-body.component';
import {ContentFooterComponent} from './component/content-footer/content-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavComponent,
    ContentComponent,
    AboutMeComponent,
    HomeComponent,
    ContentHeaderComponent,
    ContentBodyComponent,
    ContentFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
