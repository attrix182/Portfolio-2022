import { Component, OnInit } from '@angular/core';
import { LangService } from '../services/lang.service';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
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
  actualRoute:string;

  public section: string;


  constructor(private langSVC: LangService, private location: Location, private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.section = this.router.url.split('/')[1];
      console.log(this.section);
    });
  
    this.navbarButtons_EN = [
      { name: 'Home', link: 'home' },
      { name: 'About me', link: 'about' },
      { name: 'Projects', link: 'projects' },
    ];
    this.navbarButtons_ES = [
      { name: 'Inicio', link: 'home' },
      { name: 'Sobre mí', link: 'about' },
      { name: 'Proyectos', link: 'projects' },
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

  onWindowScroll(event: any) {
    let element = document.querySelector('.navbar') as HTMLElement;
    let scrollTop = event.srcElement.children[0].scrollTop;
   

    if (scrollTop > 0) {
      element.classList.add('nav-sticky');
    } else {
      element.classList.remove('nav-sticky');
    }
  }

  setActive(){
    let path = this.location.path();
    let pathArray = path.split('/');
    let active = pathArray[1];
    console.log(active);
  }

/*   goTo(page:string){
    console.log(page);
    this.location.replaceState(page);
  } */
}
