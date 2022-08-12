import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Doctor } from '../doctors';
import { SPECIALIZAIONS } from '../doctors.const';
import { first, filter, tap } from 'rxjs/operators';
import { DoctorService } from '../doctor.service';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {
  doctors$: Observable<Doctor[]> = this.doctorService.doctorList$;
  show: number = 0;
  end: number = 3;
  page: number = 3;
  listLength: number = 0;
  hideButtonNext: boolean = false;
  doctor: Doctor | undefined = undefined;

  constructor(public dialog: MatDialog, private doctorService: DoctorService) {}

  addItem(newDoctor: Doctor) {
    newDoctor.img = 'assets/images/d1.jpg';

    if (newDoctor._id.length > 0) {
      this.doctorService.updateDoctor(newDoctor).subscribe();
    } else {
      this.doctorService.addDoctor(newDoctor).subscribe();
    }
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
  deleteItem(_id: String) {
    this.doctorService.deleteDoctor(_id).subscribe();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    doctor: Doctor | undefined = undefined
  ): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: doctor,
    });
    dialogRef
      .afterClosed()
      .pipe(
        first(),
        filter((result) => !!result)
      )
      .subscribe((result) => {
        this.addItem(result);
      });
  }
  showMoreDoctors() {
    this.doctors$.pipe(tap((v) => (this.listLength = v.length))).subscribe();

    this.end += this.page;

    if (this.end >= this.listLength) {
      this.hideButtonNext = true;
    }
  }
}


