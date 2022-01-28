import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets.component';
import { SharedModule } from '../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    PetsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScrollingModule
  ],
  exports:[PetsComponent]
})
export class PetsModule { }
