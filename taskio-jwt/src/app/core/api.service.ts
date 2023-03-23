import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  serverUrl = 'http://localhost:3000/'
  TOKEN_KEY = 'token'

    setToken(value: string) {
        localStorage.setItem(this.TOKEN_KEY, value);
       
    }

     getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) || '';
        // return this.token
    }

  POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
        return this.http.post<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

     signup(user: User): Observable<User> {
        return this.POST<User>('users/signup', user);
    }
 login(user: User): Observable<User> {
        return this.POST<User>('users/login', user);
    }

     getProjects(): Observable<Array<Project>> {
        return this.http.get<Array<Project>>(
            `${this.serverUrl}projects`,
            {
                headers: {
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

     addProject(project: Project): Observable<Project> {
       
        return this.POST<Project>('projects', project);
    }

    deleteProject(id: string): Observable<Project> {
        return this.http.delete<Project>(
            `${this.serverUrl}projects/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

}
