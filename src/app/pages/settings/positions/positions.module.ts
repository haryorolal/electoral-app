import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionsRoutingModule } from './positions-routing.module';
import { PositionsComponent } from './positions.component';
import { FormComponent } from './components/form/form.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { PositionComponent } from './components/position/position.component';
import { FormModule } from './components/form/form.module';
import { ButtonModule } from 'src/app/shared';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PositionsComponent,
    PositionComponent
  ],
  imports: [
    CommonModule,
    PositionsRoutingModule,
    StoreModule.forFeature('positions', reducers),
    EffectsModule.forFeature(effects),
    FormModule,
    ButtonModule,
    MatDialogModule
  ]
})
export class PositionsModule { }
