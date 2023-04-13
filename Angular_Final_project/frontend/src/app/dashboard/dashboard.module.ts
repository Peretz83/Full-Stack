import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    
  ]
})
export class DashboardModule { }
