import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iLecturer } from '../shared/interfaces/lecturerType';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   serverUrl =  'http://localhost:3000/'
  constructor(private http:HttpClient) { }

    POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
        return this.http.post<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                   
                }
            }
        )
    }

     addLecturer(lecturer:iLecturer ): Observable<iLecturer> {
     
        return this.POST<iLecturer>('api/lecturers', lecturer);
    }
}
