import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-guest-dialog',
  templateUrl: './guest-dialog.component.html',
  styleUrls: ['./guest-dialog.component.css']
})
export class GuestDialogComponent implements OnInit {

  guest : any;

  constructor( public dialogRef: MatDialogRef<GuestDialogComponent> ) { }

  ngOnInit() {
    this.guest = {};
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
