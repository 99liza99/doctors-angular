import { Component} from '@angular/core';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Doctor } from '../doctors';




  

@Component({
  selector: 'app-dialog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public  currentDoctor: Doctor | undefined ,
  ) {}


  addItem(event: any) {
    this.dialogRef.close(event)
  }
}
