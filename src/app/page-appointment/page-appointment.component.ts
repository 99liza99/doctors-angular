import {
  Component,
  Output,
  EventEmitter,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor, Gender, Appoitment } from '../doctors';
import { Observable } from 'rxjs';
import { debounceTime, first, takeUntil, tap } from 'rxjs/operators';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GENDER } from '../doctors.const';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppoitmentService } from '../appoitment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-appointment',
  templateUrl: './page-appointment.component.html',
  styleUrls: ['./page-appointment.component.scss'],
})
export class PageAppointmentComponent {
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    doctor: ['', Validators.required],
    picker: ['', Validators.required],
    gender: ['', Validators.required],
    comment: ['', Validators.required],
  });

  doctors$: Observable<Doctor[]> = this.doctorService.doctorList$.pipe(
    tap((doctors) => {
      const doctorId = this.route.snapshot.queryParamMap.get('doctorId');
      if (doctorId) {
        this.doctorForm.patchValue({
          doctor: doctors.find((doctor) => doctor._id === doctorId) as any,
        });
      }
    })
  );

  genders: Gender[] = GENDER;
  selectedDoctor: Doctor | undefined;

  constructor(
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private appoitmentService: AppoitmentService,
    private route: ActivatedRoute
  ) {}

  @Output() newItemEvent = new EventEmitter<Doctor>();

  onSubmit(form: FormGroup) {
    const newAppoitment:Appoitment = form.value;
    newAppoitment.gender = form.value.gender.name;
    newAppoitment.doctor_id = form.value.doctor._id
    this.appoitmentService.addAppoitment(form.value).subscribe();
    this.newItemEvent.emit(form.value);
  }
  openSnackBar(templateRef: TemplateRef<any>) {
    this._snackBar.openFromTemplate(templateRef, {
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
