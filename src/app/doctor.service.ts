import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Doctor } from './doctors';
import { DOCTORS } from './doctors.const';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor() {}

  getDoctors(): Observable<Doctor[]> {
    return of(DOCTORS);
  }
  
}
