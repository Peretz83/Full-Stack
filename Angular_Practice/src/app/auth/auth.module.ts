import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    SignupPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
       ReactiveFormsModule
  ],
  exports:[
    SignupPageComponent,
    LoginPageComponent

 
  ]
})
export class AuthModule { }
