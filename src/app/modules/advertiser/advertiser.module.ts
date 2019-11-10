import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisersComponent } from './advertisers/advertisers.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularMaterialModule} from '../../commons/angular-material/angular-material.module';
import { AdvertiserDialogComponent } from './dialogs/advertiser-dialog/advertiser-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdvertiserService} from './advertiser.service';
import {MatTableModule} from '@angular/material';

const routes: Routes = [
  {
    path     : '**',
    component: AdvertisersComponent
  }
];

@NgModule({
  declarations: [
    AdvertisersComponent,
    AdvertiserDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,

    AngularMaterialModule
  ],
  entryComponents: [AdvertiserDialogComponent],
  providers: [AdvertiserService]
})
export class AdvertiserModule { }
