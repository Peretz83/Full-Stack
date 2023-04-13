import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent {
  title = "Customers"
  icon = "bi bi-person-circle"

   addCustomerForm = new FormGroup({
        fname: new FormControl('', {
            validators: [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
        }),
        lname: new FormControl('', {
            validators: [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
        }),
        phone: new FormControl('', {
            validators: [Validators.required, Validators.minLength(10),Validators.maxLength(15)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        address: new FormControl('', {
            validators: [Validators.required, Validators.minLength(2),Validators.maxLength(30)]
        })
        
    })

onSubmit(){

}
 getFieldControl(field: string): FormControl {
        return this.addCustomerForm.get(field) as FormControl;
    }

}
