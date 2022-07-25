import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-git-card',
  templateUrl: './git-card.component.html',
  styleUrls: ['./git-card.component.scss']
})
export class GitCardComponent implements OnInit {
  public profile: any;
  public linkedinURL: string;
  public linkCV: string;

  constructor(private http: HttpClient) {
    this.linkCV ='https://drive.google.com/file/d/1eLt-cvRD_par698JdlCLSoKjOOKR4Azx/view?usp=sharing';
    this.profile = '';
    this.linkedinURL ='https://www.linkedin.com/in/luciano-sinisterra-4a413913b/';
  }

  ngOnInit(): void {
    this.myProfileGitHub();
  }

  public myProfileGitHub() {
    this.getProfileGitHub().subscribe((data) => {
      this.profile = data;
    });
  }

  public getProfileGitHub(){
    return this.http.get('https://api.github.com/users/attrix182')
  }
}