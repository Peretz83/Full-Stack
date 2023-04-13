import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { User } from '../shared/interfaces.ts/userInterface';

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


  
}
