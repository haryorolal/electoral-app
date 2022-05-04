import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartysRoutingModule } from './partys-routing.module';
import { PartysComponent } from './partys.component';
import { PartyComponent } from './components/party/party.component';

import { ButtonModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormModule } from './components/form/form.module';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    PartysComponent,
    PartyComponent
  ],
  imports: [
    CommonModule,
    PartysRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('party', reducers),
    EffectsModule.forFeature(effects),
    FormModule,
    ButtonModule,
    MatDialogModule
  ]
})
export class PartysModule { }
