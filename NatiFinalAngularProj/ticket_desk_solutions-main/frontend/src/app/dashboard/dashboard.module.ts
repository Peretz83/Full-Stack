import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RouterLink
  ]
})
export class DashboardModule { }
