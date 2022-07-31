import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClimaComponent } from './clima/clima.component';
import { CardManagerComponent } from './core/card-manager/card-manager.component';
import { CalculadorPrecoComponent } from './calculador-preco/calculador-preco.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clima', component: ClimaComponent},
  {path: 'memory', component: CardManagerComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'calculador', component: CalculadorPrecoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
