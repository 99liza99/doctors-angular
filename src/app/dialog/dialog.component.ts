import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  onSubmit(form: FormGroup) {
    // if (form.valid) {
    //   this.dialogRef.close(form.value)
    //   // this.newItemEvent.emit(form.value);
    // }

    // form.reset();
  }
}
