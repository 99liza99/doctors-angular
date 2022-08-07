import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor, Gender } from '../doctors';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GENDER } from '../doctors.const';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    desc: ['', Validators.required],
  });

  doctors: Observable<Doctor[]> = this.doctorService.doctorList;
  genders: Gender[] = GENDER;
  selectedDoctor: Doctor | undefined;

  constructor(
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  @Output() newItemEvent = new EventEmitter<Doctor>();

  ngOnInit(): void {
    this.doctorService.doctors$.subscribe()
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.newItemEvent.emit(form.value);
  }
  openSnackBar(templateRef: TemplateRef<any>) {
    this._snackBar.openFromTemplate(templateRef, {
      verticalPosition: "top" 
    });
  }
}
