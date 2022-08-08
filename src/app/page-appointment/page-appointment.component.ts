import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor, Gender, Appoitment } from '../doctors';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GENDER } from '../doctors.const';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppoitmentService } from '../appoitment.service';

@Component({
  selector: 'app-page-appointment',
  templateUrl: './page-appointment.component.html',
  styleUrls: ['./page-appointment.component.scss'],
})
export class PageAppointmentComponent implements OnInit {
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    doctor: ['', Validators.required],
    picker: ['', Validators.required],
    gender: ['', Validators.required],
    comment: ['', Validators.required],
  });

  doctors: Observable<Doctor[]> = this.doctorService.doctorList;
  genders: Gender[] = GENDER;
  selectedDoctor: Doctor | undefined;

  constructor(
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private appoitmentService: AppoitmentService
  ) {}

  @Output() newItemEvent = new EventEmitter<Doctor>();

  ngOnInit(): void {
    this.doctorService.doctors$.subscribe();
  }

  onSubmit(form: FormGroup) {
    let appointment : Appoitment = form.value;
    appointment.doctor = form.value.doctor.name;
    appointment.gender = form.value.gender.name;
    this.appoitmentService.addAppoitment(form.value).subscribe();
    this.newItemEvent.emit(form.value);
  }
  openSnackBar(templateRef: TemplateRef<any>) {
    this._snackBar.openFromTemplate(templateRef, {
      verticalPosition: 'top',
    });
  }
}
