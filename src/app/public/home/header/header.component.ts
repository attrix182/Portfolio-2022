import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang:string = 'es';
  btn_cv:string;
  btn_contact:string;

  constructor(private langSVC:LangService) { }

  ngOnInit(): void {
    this.getLang();
    this.setButtons()
  }

  getLang(){
    this.langSVC.getLang$().subscribe(lang => {
      this.lang = lang;
      this.setButtons()
    });
  }

  setButtons(){
    switch(this.lang){
      case 'es':
        this.btn_cv = 'Descarga mi CV';
        this.btn_contact = 'Contactame';
        break;
      case 'en':
        this.btn_cv = 'Download CV';
        this.btn_contact = 'Contact me';
        break;
    }
  }

}
