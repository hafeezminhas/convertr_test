import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { AdvertiserDialogComponent } from './advertiser-dialog.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBar
} from '@angular/material';
import {AdvertiserService} from '../../advertiser.service';
import {Inject} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from '../../../../commons/angular-material/angular-material.module';

describe('AdvertiserDialogComponent', () => {
  let component: AdvertiserDialogComponent;
  let fixture: ComponentFixture<AdvertiserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertiserDialogComponent ],
      imports: [
        BrowserAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
