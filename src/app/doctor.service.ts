import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from './doctors';
import { DOCTORS } from './doctors.const';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor() {}

  getDoctor(id: number): Observable<Doctor> {
    const doctor = DOCTORS.find((h) => h.id === id)!;
    return of(doctor);
  }

  getDoctors(): Observable<Doctor[]> {
    return of(DOCTORS);
  }
  
}
