import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctors';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  title: string = 'List of Doctors';
  doctors: Doctor[] = [];

  constructor(public dialog: MatDialog, private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctors();
  }

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

  getDoctors(): void {
    this.doctorService
      .getDoctors()
      .subscribe((doctors) => (this.doctors = doctors));
  }
}
