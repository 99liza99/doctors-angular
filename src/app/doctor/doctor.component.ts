import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Doctor } from '../doctors';
import { DOCTORS } from '../doctors.const';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  doctors: Doctor[] = DOCTORS;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
