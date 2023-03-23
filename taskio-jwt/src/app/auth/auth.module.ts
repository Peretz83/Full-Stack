import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './field-error/field-error.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    SignupPageComponent,
    FieldErrorComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  
  
  ],
 
})
export class AuthModule { }
