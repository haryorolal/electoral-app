import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectionsRoutingModule } from './elections-routing.module';
import { ElectionsComponent } from './elections.component';
import { ElectionComponent } from './components/election/election.component';

import { ButtonModule, FormFieldModule, InputModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './components/form/form.module';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ElectionsComponent,
    ElectionComponent
  ],
  imports: [
    CommonModule,
    ElectionsRoutingModule,
    StoreModule.forFeature('election', reducers),
    EffectsModule.forFeature(effects),
    ReactiveFormsModule,
    MatDialogModule,
    ButtonModule,
    FormFieldModule,
    InputModule,
    FormModule
  ]
})
export class ElectionsModule { }
