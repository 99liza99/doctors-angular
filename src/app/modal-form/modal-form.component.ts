import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
import { Doctor, Specialization } from '../doctors';
import { SPECIALIZAIONS } from '../doctors.const';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
})
export class ModalFormComponent implements OnInit {
  doctorForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[A-Z][a-z ]*')]],
    specialization: ['', Validators.required],
    description: ['', Validators.required],
    age: ['', Validators.required],
  });

  specialization: Specialization[] = SPECIALIZAIONS;
  @Output() newItemEvent = new EventEmitter<Doctor>();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(form: FormGroup) {
    // if (form.valid) {
    //   this.dialogRef.close(form.value)
    //   // this.newItemEvent.emit(form.value);
    // }
    // form.reset();
  }
  addNewItem(form: FormGroup) {
    this.newItemEvent.emit(form.value);
  }
}
