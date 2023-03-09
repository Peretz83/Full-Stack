import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   
  ],
  exports:[
    RegisterPageComponent
  ]
})
export class AuthModule { }
