import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketNavbarComponent } from './ticket-navbar/ticket-navbar.component';
import { TitleComponent } from './title/title.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TicketNavbarComponent,
    TitleComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    TicketNavbarComponent,
    TitleComponent,
    NotificationsComponent,
    FooterComponent
  ]
})
export class SharedModule { }
