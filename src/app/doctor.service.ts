import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { Doctor } from './doctors';
import { DoctorsApiService } from './doctors-api.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private doctorList: BehaviorSubject<Doctor[]> = new BehaviorSubject(
    [] as Doctor[]
  );

  doctorList$ = this.doctorList
    .asObservable()
    .pipe(
      switchMap((localDoctors) =>
        localDoctors.length ? this.doctorList : this.doctors$
      )
    );

  private doctors$: Observable<Doctor[]> = this.doctorsApiService
    .getDoctors()
    .pipe(
      tap((doctors) => this.doctorList.next(doctors))
    ); /** Just getting list doctors */

  constructor(private doctorsApiService: DoctorsApiService) {}

  addDoctor(newDoctor: Doctor): Observable<Doctor> {
    return this.doctorsApiService
      .addDoctor(newDoctor)
      .pipe(
        tap(
          (doctor) =>
            this.doctorList.next([
              ...this.doctorList.value,
              doctor,
            ]) /** Add new doctor for our list docotrs */
        )
      );
  }
  updateDoctor(doctor: Doctor): Observable<Doctor> {
    return this.doctorsApiService
      .updateDoctor(doctor)
      .pipe(
        tap((updetedDoctor) =>
          this.doctorList.next({ ...this.doctorList.value, ...updetedDoctor })
          // ...updetedDoctor (for update doctor , NOT CHANGE!)
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
              (doctor: Doctor) =>
                doctor._id !==
                deletedDdoctor._id /** Remove deleted doctor from our list */
            )
          )
        )
      );
  }
}
