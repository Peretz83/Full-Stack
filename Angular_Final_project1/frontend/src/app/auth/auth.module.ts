import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginPageComponent,
    SignupPageComponent,
    FieldErrorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports:[
    FieldErrorsComponent
  ]
})
export class AuthModule { }
