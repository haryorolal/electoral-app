import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesRoutingModule } from './states-routing.module';
import { StatesComponent } from './states.component';
import { StateComponent } from './components/state/state.component';

import { ButtonModule, FormFieldModule, InputModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { MatDialogModule } from '@angular/material/dialog';
import { FormModule } from './components/form/form.module';


@NgModule({
  declarations: [
    StatesComponent,
    StateComponent
  ],
  imports: [
    CommonModule,
    StatesRoutingModule,
    ReactiveFormsModule,
    FormModule,
    StoreModule.forFeature('states', reducers),
    EffectsModule.forFeature(effects),
    ButtonModule,
    MatDialogModule
  ]
})
export class StatesModule { }
