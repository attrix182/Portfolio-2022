import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      name: 'Sala de juegos',
      description: 'Este proyecto consiste en un web con registro/login, varios minijuegos y un control de score',
      linkDemo: 'https://tpsaladejuegosutn.web.app/',
      linkRepo: 'https://github.com/attrix182/salaDeJuegosLAB4',
      image: '../../../../assets/img/salaDeJuegos.webp'
    },
    {
      name: 'Clinica online',
      description: 'Consiste en un web con registro/login, gestion de turnos, especialistas y especialidades',
      linkDemo: 'https://clinicaonlinetp.web.app/seccionUsuarios',
      linkRepo: 'https://github.com/attrix182/tpClinicaOnlineLab4',
      image: '../../../../assets/img/Clinica.webp'
    },
    {
      name: 'Stylefy',
      description: 'Este proyecto consiste en mi propia biblioteca de estilos, para agilizar la construcción de nuevos proyectos',
      linkDemo: 'https://stylefy.netlify.app/',
      linkRepo: 'https://github.com/attrix182/stylefy',
      image: '../../../../assets/img/stylefy.webp'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
