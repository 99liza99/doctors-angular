import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Specialization } from '../doctors';
import { SPECIALIZAIONS } from '../doctors.const';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    specialization: ['', Validators.required],
    description: ['', Validators.required],
    age: ['', Validators.required],
  });

  specialization: Specialization[] = SPECIALIZAIONS;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    console.log(this.doctorForm.value);
  }
}
