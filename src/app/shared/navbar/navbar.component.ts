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
      url: "#conferencia"
    },
    {
      nameMenu: "Los Oradores",
      url: "#oradores"
    },
    {
      nameMenu: "El lugar y la fecha",
      url: "#lugaryfecha"
    },
    {
      nameMenu: "Convertirse en Orador",
      url: "#oradorForm"
    },
    {
      nameMenu: "Comprar Tickets",
      url: "#comprarTickets"
    }
  ]

}
