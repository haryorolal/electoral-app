import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotetablesRoutingModule } from './votetables-routing.module';
import { VotetablesComponent } from './votetables.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { VotetableComponent } from './components/votetable/votetable.component';
import { FormModule } from './components/form/form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'src/app/shared';


@NgModule({
  declarations: [
    VotetablesComponent,
    VotetableComponent
  ],
  imports: [
    CommonModule,
    VotetablesRoutingModule,
    FormModule,
    ButtonModule,
    StoreModule.forFeature('CreateElection', reducers),
    EffectsModule.forFeature(effects),
    MatDialogModule
  ]
})
export class VotetablesModule { }
