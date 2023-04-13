import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from 'src/app/shared/interfaces/employeeInterface';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent {


  employees: Array<Employee> = [];

  constructor(private api: ApiService, activatedRoute: ActivatedRoute){

    let employeeObservable:Observable<Array<Employee>>

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        employeeObservable = this.api.getAllEmployeesBySearchTerm(params.searchTerm);
      else
     employeeObservable = this.api.getEmployees()

      employeeObservable.subscribe((serverEmployees)=>{

    this.employees = serverEmployees

   })
  })
  }

   getAllEmployees() {
        this.api.getEmployees().subscribe({
            next: (data: Array<Employee>) => this.employees = data,
            error: (err) => console.log(err)
        })
    }

  onDelete(employee: Employee) {
        if (!employee._id) {
            return;
        }

        var userConfirmed = confirm(`Are you sure you want to remove the following employee? \n "${employee.email}"`)

    if(userConfirmed){
        this.api.deleteEmployee(employee._id).subscribe({
            next: (data: Employee) => this.getAllEmployees(),
            error: (err) => console.log(err)
        })
      }
    }
}
