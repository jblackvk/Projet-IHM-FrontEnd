import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SearchPageComponent } from './search-page/search-page.component';
import {FormsModule} from '@angular/forms';
import {DataService} from './service/data.service';
import {DataServices} from './data.service';
import { ArticleComponent } from './article/article.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'search', component: SearchPageComponent},
  {path: '', component: AcceuilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SearchPageComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
    DataServices,
    HttpClient,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
