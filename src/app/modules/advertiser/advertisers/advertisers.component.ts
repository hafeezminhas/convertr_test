import { Component, OnInit } from '@angular/core';
import {AdvertiserService} from '../advertiser.service';
import {Advertiser} from '../../../models/advertiser';
import {MatDialog, MatDialogConfig, MatSnackBar, MatTableDataSource} from '@angular/material';
import {AdvertiserDialogComponent} from '../dialogs/advertiser-dialog/advertiser-dialog.component';

@Component({
  selector: 'app-advertisers',
  templateUrl: './advertisers.component.html',
  styleUrls: ['./advertisers.component.scss']
})
export class AdvertisersComponent implements OnInit {

  total: number;

  dataSource: MatTableDataSource<Advertiser>;
  displayedColumns = [
    'id',
    'fullName',
    'name',
    'email',
    'orgURL',
    'telephone',
    'address',
    'actions'
  ];

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private advService: AdvertiserService) { }

  ngOnInit() {
    this.advService.getAdvertisers().subscribe((res: any) => {
      res['hydra:member'].forEach(adv => {
        adv.address = this.advService.loadAddress(adv.address);
      });
      this.total = res['hydra:totalItems'];
      this.dataSource = new MatTableDataSource(res['hydra:member']);
    });
  }

  addNewAddress(adv) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { top: '10%' };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    dialogConfig.minWidth = '600px';
    dialogConfig.data = adv.address.__zone_symbol__value;

    const dialogRef = this.dialog.open(AdvertiserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (!data) return false;
      this.advService.addNewAddress(adv.address.__zone_symbol__value['@id'], data).subscribe(res => {
        this.snackBar.open(`Address update`, `Success`, { duration: 2500 });
      }, (err) => {
        console.log(err);
      });
    });
  }
}
