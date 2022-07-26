import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  lang:string;
  private lang$: Subject<string>;

  constructor() { 
    this.lang = 'es';
    this.lang$ = new Subject();
  }

  changeLang(lang:string){
    this.lang = lang;
    this.lang$.next(this.lang);
    console.log(this.lang);
  }

  getLang$(): Observable<string>{
    return this.lang$.asObservable();
  }
}
