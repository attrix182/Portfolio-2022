import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  showDesktop = true;
  time: any = new Date().toLocaleTimeString('es-AR', { hour12: false, hour: 'numeric', minute: 'numeric' });

  lang: string = 'es';
  projects: any;
  categories: string[];
  categories_es:string[] = ['Aplicaciones', 'Challenges', 'Clones']
  categories_en:string[] = ['Applications', 'Challenges', 'Clones']


  constructor(private langSVC: LangService) {}
  dragPosition = { x: 0, y: 0 };
  ngOnInit(): void {
    this.getLang();
    this.setLangProjects();
  }

  setLangProjects() {
    switch (this.lang) {
      case 'es':
        this.categories = this.categories_es;
        break;
      case 'en':
        this.categories = this.categories_en;
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
