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
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent implements OnInit {
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    doctor: ['', Validators.required],
  });

  doctors: Observable<Doctor[]> = this.doctorService.doctorList$;

  constructor(private doctorService: DoctorService, private fb: FormBuilder) {}

  ngOnInit(): void {}
}
