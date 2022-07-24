import { Injectable } from '@angular/core';
import { Doctor } from './doctors';
import { DOCTORS } from './doctors.const';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor() { }

  getDoctors(): Observable<Doctor[]> {
    const doctors = of(DOCTORS);
    return doctors;
  }

}
