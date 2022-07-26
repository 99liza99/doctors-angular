import { Injectable } from '@angular/core';
import { Doctor } from './doctors';
import { DOCTORS } from './doctors.const';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private doctorsSource = new Subject<Doctor>();

  doctorsSource$ = this.doctorsSource.asObservable();

  getDoctors(): Observable<Doctor[]> {
    const doctors = of(DOCTORS);
    return doctors;
  } 

  doctorSave(doctor: Doctor) {
    this.doctorsSource.next(doctor);
  }

  getDoctor(id: number): Observable<Doctor> {
    const doctor = DOCTORS.find((h) => h.id === id)!;
    return of(doctor);
  }
}
