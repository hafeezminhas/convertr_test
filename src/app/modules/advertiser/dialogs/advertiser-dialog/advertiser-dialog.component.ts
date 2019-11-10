import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-advertiser-dialog',
  templateUrl: './advertiser-dialog.component.html',
  styleUrls: ['./advertiser-dialog.component.scss']
})
export class AdvertiserDialogComponent implements OnInit {
  dialogData;
  addressForm: FormGroup;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<AdvertiserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MatDialog | any) {
    this.dialogData = data;
    console.log(data);
  }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      address: [this.dialogData.address, Validators.required]
    });
  }

  hasError = (controlName: string, errorName: string) => {
    return this.addressForm.controls[controlName].hasError(errorName);
  }

  onSubmit(data): void {
    if (this.addressForm.valid) {
      this.dialogRef.close(data);
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
