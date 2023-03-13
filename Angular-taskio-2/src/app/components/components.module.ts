import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldErrorsComponent } from './field-errors/field-errors.component';



@NgModule({
  declarations: [
    
    AboutPageComponent,
         FieldErrorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[

AboutPageComponent,
FieldErrorsComponent
  ]
})
export class ComponentsModule { }
