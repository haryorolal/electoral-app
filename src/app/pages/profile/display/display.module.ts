import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayComponent } from './display.component';
import { ButtonModule, UserPhotoModule } from 'src/app/shared';
import { SuperComponent } from './components/super/super.component';
import { AdminComponent } from './components/admin/admin.component';
import { VoterComponent } from './components/voter/voter.component';


@NgModule({
  declarations: [
    DisplayComponent,
    SuperComponent,
    AdminComponent,
    VoterComponent
  ],
  imports: [
    CommonModule,
    DisplayRoutingModule,
    ButtonModule,
    UserPhotoModule
  ],
  exports: [DisplayComponent]
})
export class DisplayModule { }
