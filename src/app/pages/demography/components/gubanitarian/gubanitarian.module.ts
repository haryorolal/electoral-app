import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GubanitarianRoutingModule } from './gubanitarian-routing.module';
import { GubanitarianComponent } from './gubanitarian.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    GubanitarianComponent
  ],
  imports: [
    CommonModule,
    GubanitarianRoutingModule,
    //StoreModule.forFeature('Gubanitarianresults', reducers),
    //EffectsModule.forFeature(effects)
  ]
})
export class GubanitarianModule { }
