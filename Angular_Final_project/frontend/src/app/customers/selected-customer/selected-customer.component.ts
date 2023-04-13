import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/customerInterface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-selected-customer',
  templateUrl: './selected-customer.component.html',
  styleUrls: ['./selected-customer.component.css']
})
export class SelectedCustomerComponent implements OnInit {
  title = "Customer details"
  icon = "bi bi-person-circle"

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

            },
            error: (err) => console.log(err)
        })
    }
}
