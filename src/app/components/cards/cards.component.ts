import { Component, Input } from '@angular/core';
import { DataCard } from '../interfaces/data.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() dataCard!: DataCard;

}
