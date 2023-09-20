import { Component } from '@angular/core';
import { FooterItems } from 'src/app/components/interfaces/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  menuFooter: FooterItems[] = [
    {
      id: 1,
      name: "Proyectos <br> Recientes",
      url: ""
    },
    {
      id: 2,
      name: "Contáctanos",
      url: "https://buenosaires.gob.ar/educacion/codoacodo/formulario-de-contacto"
    },
    {
      id: 3,
      name: "Prensa",
      url: "https://inscripcionesagencia.bue.edu.ar/codoacodo/"
    },
    {
      id: 4,
      name: "Conferencias",
      url: ""
    },
    {
      id: 5,
      name: "Términos y <br> Condiciones",
      url: "https://buenosaires.gob.ar/preguntas-frecuentes-4"
    },
    {
      id: 6,
      name: "Privacidad",
      url: ""
    },
    {
      id: 7,
      name: "Estudiantes",
      url: "https://aulasvirtuales.bue.edu.ar/login/index.php"
    }
  ]

}
