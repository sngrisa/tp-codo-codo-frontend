import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { HomeComponent } from './home/home.component';
import { OratorFormComponent } from './orator-form/orator-form.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { StartPageComponent } from './start-page/start-page.component';



@NgModule({
  declarations: [
    CardsComponent,
    GridCardsComponent,
    HomeComponent,
    OratorFormComponent,
    LocationInfoComponent,
    StartPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsComponent,
    GridCardsComponent,
    HomeComponent,
    OratorFormComponent,
    LocationInfoComponent
  ]
})
export class ComponentsModule { }
