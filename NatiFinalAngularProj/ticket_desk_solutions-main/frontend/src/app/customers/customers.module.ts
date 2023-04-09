import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { RouterLink } from '@angular/router';
import { SelectedCustomerComponent } from './selected-customer/selected-customer.component';
import { FieldValidationComponent } from './field-validation/field-validation.component';


@NgModule({
  declarations: [
    CustomersPageComponent,
    EditCustomerComponent,
    SelectedCustomerComponent,
    FieldValidationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterLink,

  ],
  exports: [
    FieldValidationComponent
  ]
})
export class CustomersModule { }
