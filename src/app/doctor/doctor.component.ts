import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Doctor } from '../doctors';
import { DOCTORS, SPECIALIZAIONS } from '../doctors.const';
import { first, filter } from 'rxjs/operators';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = DOCTORS;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addItem(newItem: Doctor) {
    const spec = SPECIALIZAIONS.find((h) => h.id === Number(newItem.specialization))!;
    newItem.img = 'assets/images/d1.jpg';
    newItem.id = this.doctors.length + 1;
    newItem.specialization = spec.value;

    this.doctors.push(newItem);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
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
        console.log('The dialog was closed', result);
        this.addItem(result.value);
      });
  }
}
