import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Doctor } from './doctors';
import { DOCTORS } from './doctors.const';
import { DoctorsApiService } from './doctors-api.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  doctorList: BehaviorSubject<Doctor[]> = new BehaviorSubject([] as Doctor[]);

  doctors$: Observable<Doctor[]> = this.doctorsApiService
    .getDoctors()
    .pipe(tap((doctors) => this.doctorList.next(doctors)));

  constructor(private doctorsApiService: DoctorsApiService) {}

  addDoctor(newDoctor: Doctor): Observable<Doctor> {
    return this.doctorsApiService
      .addDoctor(newDoctor)
      .pipe(
        tap((doctor) =>
          this.doctorList.next([...this.doctorList.value, doctor])
        )
      );
  }


}






  // private doctorList = new BehaviorSubject<Doctor[]>(DOCTORS);

  // doctorList$ = this.doctorList.asObservable();

