import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/ICustomer';

@Component({
  selector: 'app-selected-customer',
  templateUrl: './selected-customer.component.html',
  styleUrls: ['./selected-customer.component.css']
})
export class SelectedCustomerComponent implements OnInit {
   sectionTitle = 'Customers'
   sectionIcon = 'fa-solid fa-users-viewfinder'

  customer: Customer | null = null;

  constructor(
        private api: ApiService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }

  ngOnInit(): void {
        this.activeRoute.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id') as string;
                return this.api.getOneCustomer(id);
            })
        ).subscribe({
            next: (data: Customer) => {
                this.customer = data;
                // const title = data.title || '';
                // const description = data.description || '';
                // const status = data.status || 'PLANNED';
                // this.editProjectForm.get('title')?.setValue(title);
                // this.editProjectForm.get('description')?.setValue(description);
                // this.editProjectForm.get('status')?.setValue(status);
                // console.log(this.lecturer);

            },
            error: (err) => console.log(err)
        })
    }

}
