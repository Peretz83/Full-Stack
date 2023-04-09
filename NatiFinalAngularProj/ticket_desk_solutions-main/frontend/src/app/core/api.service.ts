import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/IUserSignup';
import { BASE_URL, CUSTOMER_URL, EMPLOYEES_URL, EMPLOYEE_BY_SEARCH_URL, GET_USER_URL, TICKETS_URL, USER_LOGIN_URL, USER_REGISTER_URL} from '../shared/constants/urls';
import { Customer } from '../shared/interfaces/ICustomer';
import { Employee } from '../shared/interfaces/IEmployee';
import { Router } from '@angular/router';
import { Ticket } from '../shared/interfaces/ITickets';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router) { }

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

  //  getOneUser(): Observable<Array<User>> {
  //   return this.GET<Array<User>>(GET_USER_URL);
  // }

  getCustomers(): Observable<Array<Customer>> {
    return this.GET<Array<Customer>>(CUSTOMER_URL);
  }

  getOneCustomer(id: string): Observable<Customer> {
        return this.GET<Customer>(`${CUSTOMER_URL}/${id}`);
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
    return this.GET<Array<Employee>>(EMPLOYEES_URL);
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

  getTickets(): Observable<Array<Ticket>> {
    return this.GET<Array<Ticket>>(TICKETS_URL);
  }

   getOneTicket(id: string): Observable<Ticket> {
        return this.GET<Ticket>(`${TICKETS_URL}/${id}`);
    }

  addTicket(ticket: Ticket): Observable<Ticket> {
        return this.POST<Ticket>(TICKETS_URL, ticket);
  }

  updateTicket(id: string, ticket: Ticket): Observable<Ticket> {
        return this.http.put<Ticket>(
            `${BASE_URL}${TICKETS_URL}/${id}`,
            ticket,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'x-auth-token': this.getToken()
                }
            }
        )
    }

}
