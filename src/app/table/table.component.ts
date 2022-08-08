import { Component, OnInit } from '@angular/core';
import {  AppoitmentService  } from '../appoitment.service';
import { Appoitment, Doctor } from '../doctors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  appoitments: Observable<Appoitment[]> = this.appoitmentService.appoitmentList;
  displayedColumns: string[] = ['name', 'doctor', 'gender', 'picker', 'comment', 'action'];

  constructor(  private appoitmentService: AppoitmentService) { }

  ngOnInit(): void {
    this.appoitmentService.appoitments$.subscribe();
  }
  deleteItem(id: string) {
    this.appoitmentService.deleteAppoitment(id).subscribe();
  }

}
