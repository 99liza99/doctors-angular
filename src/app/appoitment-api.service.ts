import { Injectable } from '@angular/core';
import { Appoitment} from './doctors';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AppoitmentApiService {
  constructor(private http: HttpClient) {}

  getAppoitments(): Observable<Appoitment[]> {
    return this.http.get<Appoitment[]>('http://localhost:3000/appoitment');
  }
  addAppoitment(appoitment: Appoitment): Observable<Appoitment> {
    return this.http.post<Appoitment>('http://localhost:3000/appoitment/', appoitment);
  }
  deleteAppoitment(_id: String): Observable<Appoitment> {
    return this.http.delete<Appoitment>('http://localhost:3000/appoitment/'+_id);
  }
}
