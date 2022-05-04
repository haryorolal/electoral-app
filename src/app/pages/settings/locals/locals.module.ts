import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalsRoutingModule } from './locals-routing.module';
import { LocalsComponent } from './locals.component';
import { LocalComponent } from './components/local/local.component';

import { ButtonModule, FormFieldModule, InputModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './components/form/form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    LocalsComponent,
    LocalComponent
  ],
  imports: [
    CommonModule,
    LocalsRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormFieldModule,
    InputModule,
    StoreModule.forFeature('local', reducers),
    EffectsModule.forFeature(effects),
    //FormModule,
    MatDialogModule
  ]
})
export class LocalsModule { }
