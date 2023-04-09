import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/ICustomer';
import { Employee } from 'src/app/shared/interfaces/IEmployee';
import { Ticket } from 'src/app/shared/interfaces/ITickets';

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.css']
})
export class DashboardInfoComponent implements OnInit {

  customers: Array<Customer> = [];
  employees: Array<Employee> = [];
  tickets: Array<Ticket> = [];

  constructor(private api: ApiService){}

  getAllCustomers(){
    this.api.getCustomers().subscribe({
            next: (data: Array<Customer>) => this.customers = data,
            error: (err) => console.log(err)
        })
  }

  getAllEmployees(){
    this.api.getEmployees().subscribe({
            next: (data: Array<Employee>) => this.employees = data,
            error: (err) => console.log(err)
        })
  }

  getAllTickets(){
    this.api.getTickets().subscribe({
            next: (data: Array<Ticket>) => {
              this.tickets = data
            // const results =  this.tickets.filter(ticket =>{
            //  ticket.status?.includes('New')

            //   })
            //   console.log(results);

            },
            error: (err) => console.log(err)
        })
  }

  ngOnInit(): void {
    this.getAllCustomers()
    this.getAllEmployees()
    this.getAllTickets()
  }


}
