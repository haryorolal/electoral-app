import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { FormModule } from './form/form.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';


@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FormModule,
    StoreModule.forFeature('GeneralElection', reducers),
    EffectsModule.forFeature(effects)
  ],
  //exports: [GeneralComponent]
})
export class GeneralModule { }
