import { Component} from '@angular/core';
import {MatDialog,MatDialogRef,} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Doctor } from '../doctors';

  

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public dialog: MatDialog, 
  ) {}


  addItem(event: any) {
    this.dialogRef.close(event)
  }
}
