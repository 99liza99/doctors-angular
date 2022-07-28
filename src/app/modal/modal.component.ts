import { Component} from '@angular/core';
import {MatDialog,MatDialogRef,} from '@angular/material/dialog';


  

@Component({
  selector: 'app-dialog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    public dialog: MatDialog, 
  ) {}


  addItem(event: any) {
    this.dialogRef.close(event)
  }
}
