import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/customerInterface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {

  customer: Customer | null = null;

   title = "Edit your customer"
   icon = "bi bi-person-circle"

    editCustomerForm = new FormGroup({
        fname: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        lname: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100),
                Validators.required
            ]
        }),
        email: new FormControl('', {
            validators: [
                Validators.email,
                Validators.required
            ]
        }),
        phone: new FormControl('', {
            validators: [
                Validators.minLength(6),
                Validators.maxLength(20)
            ]
        }),
        address: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        })
    })

    constructor(
        private api: ApiService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activeRoute.paramMap.pipe(
            switchMap(params => {
              console.log(params);

                const id = params.get('id') as string;
                return this.api.getOneCustomer(id);
            })
        ).subscribe({
            next: (data: Customer) => {
                this.customer = data;
                const fname = data.fname || '';
                const lname = data.lname || '';
                const email = data.email || '';
                const phone = data.phone || '';
                const address = data.address || '';
                this.editCustomerForm.get('fname')?.setValue(fname);
                this.editCustomerForm.get('lname')?.setValue(lname);
                this.editCustomerForm.get('email')?.setValue(email);
                this.editCustomerForm.get('phone')?.setValue(phone);
                this.editCustomerForm.get('address')?.setValue(address);
            },
            error: (err) => console.log(err)
        })
    }

    onSubmit() {
        if (this.editCustomerForm.invalid || !this.customer?._id) {
            return;
        }

        this.api.updateCustomer(this.customer?._id, this.editCustomerForm.value).subscribe({
            next: (data: Customer) => {
              this.router.navigate(['customers']);


            },
            error: (err) => console.log(err)
        })
    }




}
