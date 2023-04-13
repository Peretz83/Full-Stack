import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Employee } from 'src/app/shared/interfaces/employeeInterface';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit{
  title = 'Employees'
  icon = 'bi bi-briefcase-fill'
   employees: Array<Employee> = [];

  addEmployeeForm = new FormGroup({
        name: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(100)
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
                Validators.minLength(10),
                Validators.maxLength(12),
                Validators.required
            ]
        }),
        bDay: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100),
                Validators.required
            ]
        })
    })



  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getAllEmployees()
  }

    onSubmit(){
       if (this.addEmployeeForm.invalid) {
            return;
        }

        this.api.addEmployee(this.addEmployeeForm.value).subscribe({
            next: (data: Employee) => {

              this.addEmployeeForm.reset();

                this.getAllEmployees();


            },
            error: (err) => {
              console.log(err)
            }

        })
    }

    getAllEmployees() {
        this.api.getEmployees().subscribe({
            next: (data: Array<Employee>) => this.employees = data,
            error: (err) => console.log(err)
        })
    }
  getFieldControl(field: string): FormControl {
        return this.addEmployeeForm.get(field) as FormControl;
    }




}
