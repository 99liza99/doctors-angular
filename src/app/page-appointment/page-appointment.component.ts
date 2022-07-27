import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctors';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-page-appointment',
  templateUrl: './page-appointment.component.html',
  styleUrls: ['./page-appointment.component.css'],
})
export class PageAppointmentComponent implements OnInit {
  
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    doctor: ['', Validators.required],
  });

  doctors: Observable<Doctor[]> = this.doctorService.doctorList$;

  constructor(private doctorService: DoctorService, private fb: FormBuilder) {}

  ngOnInit(): void {}
}
