import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FieldErrorsComponent } from './field-errors/field-errors.component';
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
    SharedModule,
    RouterModule
  ]
})
export class AuthModule { }
