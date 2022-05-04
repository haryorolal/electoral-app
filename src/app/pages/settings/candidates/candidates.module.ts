import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ButtonModule } from 'src/app/shared';
import { MatDialogModule } from '@angular/material/dialog';
import { FormModule } from './components/form/form.module';


@NgModule({
  declarations: [
    CandidatesComponent,
    CandidateComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    StoreModule.forFeature('candidates', reducers),
    EffectsModule.forFeature(effects),
    ButtonModule,
    MatDialogModule,
    FormModule
  ]
})
export class CandidatesModule { }
