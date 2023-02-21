import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  lang: string = 'es';
  projects: any;
  projects_es = [
    {
      name: 'Sala de juegos',
      description: 'Este proyecto consiste en un web con registro/login, varios minijuegos y un control de score',
      linkDemo: 'https://tpsaladejuegosutn.web.app/',
      linkRepo: 'https://github.com/attrix182/salaDeJuegosLAB4',
      image: '../../../../assets/img/salaDeJuegos.webp'
    },
    {
      name: 'Feedbackcito',
      description: 'Este proyecto consiste en un web para crear sesiones de feedback. A las cuales se puede acceder por un codigo QR ',
      linkDemo: 'https://feedbackcito.com.ar',
      linkRepo: 'https://github.com/attrix182/feedbackcito',
      image: '../../../../assets/img/feedbackcito.webp'
    },
    {
      name: 'Stylefy',
      description:
        'Este proyecto consiste en mi propia biblioteca de estilos, para agilizar la construcción de nuevos proyectos',
      linkDemo: 'https://stylefy.netlify.app/',
      linkRepo: 'https://github.com/attrix182/stylefy',
      image: '../../../../assets/img/stylefy.webp'
    }
  ];

  projects_en = [
    {
      name: 'Game Room',
      description: 'This project consists in a web with registration/login, several games and a control of score',
      linkDemo: 'https://tpsaladejuegosutn.web.app/',
      linkRepo: 'https://github.com/attrix182/salaDeJuegosLAB4',
      image: '../../../../assets/img/salaDeJuegos.webp'
    },
    {
      name: 'Feedbackcito',
      description: 'This project consists in a web to create feedback sessions. To which you can access by a QR code',
      linkDemo: 'https://feedbackcito.com.ar',
      linkRepo: 'https://github.com/attrix182/feedbackcito',
      image: '../../../../assets/img/feedbackcito.webp'
    },
    {
      name: 'Stylefy',
      description: 'This project consists in my own library of styles, to simplify the construction of new projects',
      linkDemo: 'https://stylefy.netlify.app/',
      linkRepo: 'https://github.com/attrix182/stylefy',
      image: '../../../../assets/img/stylefy.webp'
    }
  ];

  constructor(private langSVC: LangService) {}

  ngOnInit(): void {
    this.getLang();
    this.setLangProjects();
  }

  setLangProjects() {
    switch (this.lang) {
      case 'es':
        this.projects = this.projects_es;
        break;
      case 'en':
        this.projects = this.projects_en;
        break;
    }
  }

  getLang() {
    this.langSVC.getLang$().subscribe((lang) => {
      this.lang = lang;
      this.setLangProjects();
    });
  }
}
