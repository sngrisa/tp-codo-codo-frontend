import { Component } from '@angular/core';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent {

  dataCard: string[] =
    [
      "Bs As - Octubre",
      "Es la capital y ciudad más poblada de la República Argentina. Sus nombres oficiales son Ciudad de Buenos Aires o Ciudad Autónoma de Buenos Aires (CABA).​ También es llamada Capital Federal, por ser la sede del gobierno nacional",
    ];

}
