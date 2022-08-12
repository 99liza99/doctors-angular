import { Component, OnInit, Output, EventEmitter, Injectable, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { Doctor, Specialization } from '../doctors';
import { SPECIALIZAIONS } from '../doctors.const';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss'],
})
export class DoctorFormComponent implements OnInit {
  doctorForm = this.fb.group({
    _id: [''],
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    specialization: ['', Validators.required],
    description: ['', Validators.required],
    age: ['', Validators.required] as any
  });

  specialization: Specialization[] = SPECIALIZAIONS;
  @Output() newItemEvent = new EventEmitter<Doctor>();
  @Input() doctor: Doctor | undefined;

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {}

  ngOnInit(): void {
    if (this.doctor) {
      this.doctorForm.patchValue(this.doctor)
    }
  }

  onSubmit(form: FormGroup) {
    this.newItemEvent.emit(form.value);
  }
}
