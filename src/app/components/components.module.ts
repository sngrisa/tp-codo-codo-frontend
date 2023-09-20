import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { HomeComponent } from './home/home.component';
import { OratorFormComponent } from './orator-form/orator-form.component';
import { CardTwoRowsComponent } from './card-two-rows/card-two-rows.component';



@NgModule({
  declarations: [
    CardsComponent,
    GridCardsComponent,
    HomeComponent,
    OratorFormComponent,
    CardTwoRowsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardsComponent,
    GridCardsComponent,
    HomeComponent,
    OratorFormComponent,
    CardTwoRowsComponent
  ]
})
export class ComponentsModule { }
