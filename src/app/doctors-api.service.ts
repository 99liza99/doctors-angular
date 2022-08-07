import { Injectable } from '@angular/core';
import { Doctor } from './doctors';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorsApiService {
  constructor(private http: HttpClient) {}

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>('http://localhost:3000/doctors');
  }

  addDoctor(newDoctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>('http://localhost:3000/doctors/', newDoctor);
  }

  deleteDoctor(_id: String): Observable<Doctor> {
    return this.http.delete<Doctor>('http://localhost:3000/doctors/'+_id);
  }
}