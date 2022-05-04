import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstitutionsRoutingModule } from './constitutions-routing.module';
import { ConstitutionsComponent } from './constitutions.component';
import { ConstitutionComponent } from './components/constitution/constitution.component';

import { ButtonModule, FormFieldModule, InputModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';
import { MatDialogModule } from '@angular/material/dialog';
import { FormModule } from './components/form/form.module';


@NgModule({
  declarations: [
    ConstitutionsComponent,
    ConstitutionComponent
  ],
  imports: [
    CommonModule,
    ConstitutionsRoutingModule,
    StoreModule.forFeature('constitution', reducers),
    EffectsModule.forFeature(effects),
    ReactiveFormsModule,
    ButtonModule,
    FormFieldModule,
    MatDialogModule,
    InputModule,
    FormModule
    
  ]
})
export class ConstitutionsModule { }
