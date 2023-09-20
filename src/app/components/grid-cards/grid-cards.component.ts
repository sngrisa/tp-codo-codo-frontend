import { Component } from '@angular/core';
import { DataCard } from '../interfaces/data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent {

  dataCards!: DataCard[];

  title: string = "conoce a los oradores".toUpperCase();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((datum: DataCard[]) => { return this.dataCards = datum });
  }

}
