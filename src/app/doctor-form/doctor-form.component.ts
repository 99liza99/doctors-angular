import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Doctor, Specialization } from '../doctors';
import { SPECIALIZAIONS } from '../doctors.const';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css'],
})
export class DoctorFormComponent implements OnInit {
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    specialization: ['', Validators.required],
    description: ['', Validators.required],
    age: ['', Validators.required],
  });

  specialization: Specialization[] = SPECIALIZAIONS;
  @Output() newItemEvent = new EventEmitter<Doctor>();

  constructor(private fb: FormBuilder, private doctorService: DoctorService) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.newItemEvent.emit(form.value);
  }
}
