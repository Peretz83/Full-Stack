import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutFieldErrorComponent } from './about-field-error/about-field-error.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutFieldErrorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [
    AboutUsComponent,
    AboutFieldErrorComponent
  ]
})
export class AboutModule { }
