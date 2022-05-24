import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardManagerComponent } from './card-manager/card-manager.component';



@NgModule({
  declarations: [
    CardManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardManagerComponent
  ]
})
export class CoreModule { }
