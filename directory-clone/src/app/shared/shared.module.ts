import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';



@NgModule({
    declarations: [
        NavbarComponent,
        NotificationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        NotificationComponent
    ]
})
export class SharedModule { }
