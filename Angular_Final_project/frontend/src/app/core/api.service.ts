import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, CUSTOMER_URL, EMPLOYEES_URL, EMPLOYEE_BY_SEARCH_URL, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { User } from '../shared/interfaces/userInterface';
import { Customer } from '../shared/interfaces/customerInterface';
import { Employee } from '../shared/interfaces/employeeInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   private TOKEN_KEY = 'token'

  GET<DynamicType>(endpoint: string): Observable<DynamicType> {
        return this.http.get<DynamicType>(
            `${BASE_URL}${endpoint}`,
            {
                headers: {
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }

  POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
    return this.http.post<DynamicType>(
      `${BASE_URL}${endpoint}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          // 'x-auth-token': this.getToken()
        }
      }
      )
  }

  setToken(value: string) {
        localStorage.setItem(this.TOKEN_KEY, value)
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) || '';
    }

    deleteToken() {
      localStorage.removeItem(this.TOKEN_KEY);
    }

  signup(user: User): Observable<User> {
        return this.POST<User>(USER_REGISTER_URL, user);
    }

  login(user: User): Observable<User> {
    return this.POST<User>(USER_LOGIN_URL, user);
  }

 getCustomers(): Observable<Array<Customer>> {
    return this.GET<Array<Customer>>(CUSTOMER_URL);
  }
addCustomer(customer: Customer): Observable<Customer> {
        return this.POST<Customer>(CUSTOMER_URL, customer);
    }
     deleteCustomer(id: string): Observable<Customer> {
        return this.http.delete<Customer>(
            `${BASE_URL}${CUSTOMER_URL}/${id}`,
            {
                headers: {
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }
     getOneCustomer(id: string): Observable<Customer> {
        return this.GET<Customer>(`${CUSTOMER_URL}/${id}`);
    }
     updateCustomer(id: string, customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(
            `${BASE_URL}${CUSTOMER_URL}/${id}`,
            customer,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }

getEmployees(): Observable<Array<Employee>> {
    return this.GET<Array<Customer>>(EMPLOYEES_URL);
  }

  getAllEmployeesBySearchTerm(searchTerm: string){
    return this.http.get<Array<Employee>>(EMPLOYEE_BY_SEARCH_URL + searchTerm);
  }

  addEmployee(employee: Employee): Observable<Employee> {
        return this.POST<Employee>(EMPLOYEES_URL, employee);
  }

   deleteEmployee(id: string): Observable<Employee> {
        return this.http.delete<Employee>(
            `${BASE_URL}${EMPLOYEES_URL}/${id}`,
            {
                headers: {
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }
}
