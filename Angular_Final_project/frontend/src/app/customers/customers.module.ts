import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SelectedCustomerComponent } from './selected-customer/selected-customer.component';



@NgModule({
  declarations: [
    CustomersPageComponent,
    EditCustomerComponent,
    SelectedCustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
