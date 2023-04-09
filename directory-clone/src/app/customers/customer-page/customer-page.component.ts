import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Customer {
    name?: string | null;
    phone?: string | null;
    email?: string | null;
}

@Component({
    selector: 'app-customer-page',
    templateUrl: './customer-page.component.html',
    styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent {
    showForm = false;
    showNotification = false;

    customers: Array<Customer> = [
        {
            name: "Matilda",
            phone: "039990000",
            email: "matilda@email.com"
        }, {
            name: "mina",
            phone: "025555555",
            email: "mina@gmail.com",
        },
        {
            name: "oliver",
            phone: "025550000",
            email: "twist@gmail.com"
        }
    ];

    customerForm = new FormGroup({
        name: new FormControl('', {
            validators: Validators.required
        }),
        email: new FormControl('', {
            validators: [
                Validators.required,
                Validators.email
            ]
        }),
        phone: new FormControl('', {
            validators: Validators.required
        })
    })

    customerTotal(): number {
        return this.customers ? this.customers.length : 0;
    }

    toggleForm() {
        this.showForm = !this.showForm;
    }

    notificationClosed(state: boolean) {
        this.showNotification = state;
        this.showForm = false;
    }

    onSubmit() {
        if (!this.customerForm.valid) {
            return;
        }

        this.customers.push(this.customerForm.value);
        this.customerForm.reset();
        this.showNotification = true;
    }
}
