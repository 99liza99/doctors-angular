import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doctor } from './doctors';
import { DOCTORS } from './doctors.const';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  constructor() {}

  private doctorList = new BehaviorSubject<Doctor[]>(DOCTORS);

  doctorList$ = this.doctorList.asObservable();

  addDoctor(doctor: Doctor) {
    this.doctorList.next([...this.doctorList.value, doctor]);
  }
}
