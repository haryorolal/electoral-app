import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { ResultComponent } from './component/result/result.component';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    ResultsComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    StoreModule.forFeature('results', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class ResultsModule { }
