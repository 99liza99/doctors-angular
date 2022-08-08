import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Doctor } from '../doctors';
import { SPECIALIZAIONS } from '../doctors.const';
import { first, filter } from 'rxjs/operators';
import { DoctorService } from '../doctor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent implements OnInit {
  doctors: Observable<Doctor[]> = this.doctorService.doctorList;

  constructor(public dialog: MatDialog, private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.doctors$.subscribe();
  }

  addItem(newItem: Doctor) {
    const spec = SPECIALIZAIONS.find(
      (elemet) => elemet.id === Number(newItem.specialization)
    )!;
    newItem.img = 'assets/images/d1.jpg';
    newItem.specialization = spec.value;

    this.doctorService.addDoctor(newItem).subscribe();
  }

  deleteItem(_id: String){
    this.doctorService.deleteDoctor(_id).subscribe();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(ModalComponent, {
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
        this.addItem(result);
      });
  }
}
