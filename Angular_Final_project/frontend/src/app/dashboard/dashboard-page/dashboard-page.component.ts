import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Customer } from 'src/app/shared/interfaces/customerInterface';
import { Employee } from 'src/app/shared/interfaces/employeeInterface';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
   customers: Array<Customer> = [];
   employees: Array<Customer> = [];
  ngOnInit(): void {
    this.getAllCustomers()
    this.getAllEmployees()
    
}
 getAllCustomers() {
        this.api.getCustomers().subscribe({
            next: (data: Array<Customer>) => this.customers = data,
            error: (err) => console.log(err)
        })
    }
    getAllEmployees() {
        this.api.getEmployees().subscribe({
            next: (data: Array<Employee>) => this.employees = data,
            error: (err) => console.log(err)
        })
    }
  
  constructor(private api:ApiService){

  }
 
  today =  Date.now();

  title = 'Dashboard'
  icon = 'bi bi-graph-up'
  title2 = 'Customer'
  icon2 = 'bi bi-plus-circle-fill'


 


}
