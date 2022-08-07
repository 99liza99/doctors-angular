import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Doctor } from './doctors';
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

  deleteDoctor(id: String) {
    return this.doctorsApiService
      .deleteDoctor(id)
      .pipe(
        tap((deletedDdoctor) =>
          this.doctorList.next(
            this.doctorList.value.filter(
              (doctor: Doctor) => doctor._id !== deletedDdoctor._id
            )
          )
        )
      );
  }
}

// private doctorList = new BehaviorSubject<Doctor[]>(DOCTORS);

// doctorList$ = this.doctorList.asObservable();
