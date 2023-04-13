import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { SelectedCustomerComponent } from './selected-customer/selected-customer.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersPageComponent,
    EditCustomerComponent,
    SelectedCustomerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AuthModule,
    RouterModule
  ]
})
export class CustomersModule { }
