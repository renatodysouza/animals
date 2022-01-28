import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { PetsModule } from '../pets/pets.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    PetsModule
  ]
})
export class HomeModule { }
