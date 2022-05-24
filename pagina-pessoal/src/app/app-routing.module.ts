import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClimaComponent } from './clima/clima.component';
import { CardManagerComponent } from './core/card-manager/card-manager.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clima', component: ClimaComponent},
  {path: 'memory', component: CardManagerComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
