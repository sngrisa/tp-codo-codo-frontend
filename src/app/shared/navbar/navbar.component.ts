import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  menuItems: any[] = [
    {
      nameMenu: "La Conferencia",
      url: "#conferencia",
      color: "text-white"
    },
    {
      nameMenu: "Los Oradores",
      url: "#oradores",
      color: "text-white"
    },
    {
      nameMenu: "El lugar y la fecha",
      url: "#lugaryfecha",
      color: "text-white"
    },
    {
      nameMenu: "Convertirse en Orador",
      url: "#oradorForm",
      color: "text-white"
    },
    {
      nameMenu: "Comprar tickets",
      url: "#comprarTickets",
      color: "text-green"
    }
  ]

}
