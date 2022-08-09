import { Component, OnInit } from '@angular/core';
import {  AppoitmentService  } from '../appoitment.service';
import { Appoitment, Doctor } from '../doctors';
import { Observable } from 'rxjs';
import { first, filter } from 'rxjs/operators';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  appoitments: Observable<Appoitment[]> = this.appoitmentService.appoitmentList;
  displayedColumns: string[] = ['name', 'doctor', 'gender', 'picker', 'comment', 'action'];

  constructor(  private appoitmentService: AppoitmentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.appoitmentService.appoitments$.subscribe();
  }
  deleteItem(id: string) {
    this.appoitmentService.deleteAppoitment(id).subscribe();
  }
  openConfirm(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    _id: string
  ): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef
      .afterClosed()
      .pipe(
        first(),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        if (result === true) {
          this.deleteItem(_id);
        }
      });
  }
}
