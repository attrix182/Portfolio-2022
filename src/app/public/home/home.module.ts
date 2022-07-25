import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { HeaderComponent } from './header/header.component';
import { GitCardComponent } from './git-card/git-card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    GitCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdbCarouselModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
