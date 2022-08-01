import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { DashboardComponent } from './admin-dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
