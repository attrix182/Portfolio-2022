import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  linkCV ='https://drive.google.com/file/d/1R0mj4MV-KaQe21EGELs3F2PwGoTkUYXs/view?usp=sharing';
  gitUrl = 'https://github.com/attrix182';
  linkedinURL ='https://www.linkedin.com/in/luciano-sinisterra-4a413913b/';
  lang:string = 'es';

  constructor(private langSVC:LangService) { }

  ngOnInit(): void {
    this.getLang();
  }

  getLang(){
    this.langSVC.getLang$().subscribe(lang => {
      this.lang = lang;
    });
  }

}
