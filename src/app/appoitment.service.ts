import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AppoitmentApiService } from './appoitment-api.service';
import { Appoitment } from './doctors';

@Injectable({
  providedIn: 'root',
})
export class AppoitmentService {
  appoitmentList: BehaviorSubject<Appoitment[]> = new BehaviorSubject(
    [] as Appoitment[]
  );

  constructor(private appoitmentsApiService: AppoitmentApiService) {}

  appoitments$: Observable<Appoitment[]> = this.appoitmentsApiService
    .getAppoitments()
    .pipe(tap((Appoitments) => this.appoitmentList.next(Appoitments)));

    addAppoitment(newAppoitment: Appoitment): Observable<Appoitment> {
    return this.appoitmentsApiService
      .addAppoitment(newAppoitment)
      .pipe(
        tap((appoitment) =>
          this.appoitmentList.next([...this.appoitmentList.value, appoitment])
        )
      );
  }
}
