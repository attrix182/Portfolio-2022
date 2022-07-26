import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarButtons_EN: any;
  navbarButtons_ES: any;
  navbarButtons: any;
  selectFlag: string = '';

  constructor(private langSVC: LangService, private location: Location) {
    this.navbarButtons_EN = [
      { name: 'Home', link: '/home' },
      { name: 'About', link: '/about' },
      { name: 'Projects', link: '/projects' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contact', link: '/contact' }
    ];
    this.navbarButtons_ES = [
      { name: 'Inicio', link: '/home' },
      { name: 'Sobre mí', link: '/about' },
      { name: 'Proyectos', link: '/projects' },
      { name: 'Blog', link: '/blog' },
      { name: 'Contacto', link: '/contact' }
    ];
  }

  ngOnInit(): void {
    this.setLang('es');
    this.langSVC.getLang$().subscribe((lang) => {
      this.selectFlag = lang;
      this.changeFlag();
    });
  }

  changeFlag() {
    if (this.selectFlag == 'es') {
      this.selectFlag = 'flag-spain';
    } else if (this.selectFlag == 'en') {
      this.selectFlag = 'flag-united-kingdom';
    }
  }

  setLang(lang: string) {
    switch (lang) {
      case 'es':
        this.navbarButtons = this.navbarButtons_ES;
        break;
      case 'en':
        this.navbarButtons = this.navbarButtons_EN;
        break;
    }

    this.selectFlag = lang;
    this.langSVC.changeLang(lang);
    this.changeFlag();
  }

  goTo(page:string){
    console.log(page);
    this.location.replaceState(page);
  }
}
