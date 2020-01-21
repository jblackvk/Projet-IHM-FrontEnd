import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SearchPageComponent } from './search-page/search-page.component';
import {FormsModule} from '@angular/forms';
import {DataService} from './service/data.service';
import { ArticleComponent } from './article/article.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const appRoute: Routes = [
  {path: 'accueil', component: AcceuilComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'search2', component: Page2Component},
  {path: 'search3', component: Page3Component},
  {path: '', component: AcceuilComponent},
  {path: '***', redirectTo: 'accueil'}
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SearchPageComponent,
    ArticleComponent,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [
    DataService,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
