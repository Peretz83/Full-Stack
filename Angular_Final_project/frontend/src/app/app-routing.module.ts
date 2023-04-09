import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { CustomersPageComponent } from './customers/customers-page/customers-page.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { SelectedCustomerComponent } from './customers/selected-customer/selected-customer.component';
import { EmployeesPageComponent } from './employees/employees-page/employees-page.component';

const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"signup",component:SignupPageComponent},
  {path:"customers",component:CustomersPageComponent},
  {path:"edit-customer/:id",component:EditCustomerComponent},
  {path:"selected-customer/:id",component:SelectedCustomerComponent},
  {path:"employees",component:EmployeesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
