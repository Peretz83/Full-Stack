import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LecturerPageComponent } from './lecturer-page/lecturer-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileCardComponent,
    LecturerPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LecturerModule { }
