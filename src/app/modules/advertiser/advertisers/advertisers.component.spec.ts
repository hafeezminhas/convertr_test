import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { AdvertisersComponent } from './advertisers.component';
import {MatDialog, MatDialogModule, MatIconModule, MatSnackBar, MatSnackBarModule, MatTableModule} from '@angular/material';
import {AdvertiserService} from '../advertiser.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {AdvertiserDialogComponent} from '../dialogs/advertiser-dialog/advertiser-dialog.component';
import {Observable, Observer} from 'rxjs';

describe('AdvertisersComponent', () => {
  let component: AdvertisersComponent;
  let fixture: ComponentFixture<AdvertisersComponent>;
  let advertService: AdvertiserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, MatIconModule, MatSnackBarModule, MatDialogModule, HttpClientModule],
      declarations: [ AdvertisersComponent ],
      providers: [MatDialog, MatSnackBar, AdvertiserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisersComponent);
    component = fixture.componentInstance;
    advertService = TestBed.get(AdvertiserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load advertisers from api', async(() => {
    fixture.detectChanges();
    component.ngOnInit();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.total).toEqual(5);
    });
  }));
});
