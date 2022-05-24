import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ClimaComponent } from './clima/clima.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {CardManagerComponent} from './core/card-manager/card-manager.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClimaComponent,
    CabecalhoComponent,
    CardManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
