import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ClimaComponent } from './clima/clima.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import {CardManagerComponent} from './core/card-manager/card-manager.component';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CalculadorPrecoComponent } from './calculador-preco/calculador-preco.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClimaComponent,
    CabecalhoComponent,
    CardManagerComponent,
    HardSkillsComponent,
    AboutMeComponent,
    PortfolioComponent,
    CalculadorPrecoComponent,
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
