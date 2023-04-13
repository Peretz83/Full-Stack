import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/customerInterface';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {
  title = "Customers"
  icon = "bi bi-person-circle"


   customers: Array<Customer> = [];

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
constructor(private api:ApiService){

}
  ngOnInit(): void {
    this.getAllCustomers()
  }

onSubmit(){
  if (this.addCustomerForm.invalid) {
            return;
        }
    this.api.addCustomer(this.addCustomerForm.value).subscribe({
            next: (data: Customer) => {
                this.addCustomerForm.reset();
                this.getAllCustomers();
            },
            error: (err) => console.log(err)
        })


}


     getAllCustomers() {
        this.api.getCustomers().subscribe({
            next: (data: Array<Customer>) => this.customers = data,
            error: (err) => console.log(err)
        })
    }
    onDelete(customer:Customer){
      if (!customer._id) {
            return;
        }

        var userConfirmed = confirm(`Are you sure you want to remove the following customer? \n "${customer.email}"`)

    if(userConfirmed){
        this.api.deleteCustomer(customer._id).subscribe({
            next: (data: Customer) => this.getAllCustomers(),
            error: (err) => console.log(err)
        })
      }

    }

      getFieldControl(field: string): FormControl {
        return this.addCustomerForm.get(field) as FormControl;
    }

}
