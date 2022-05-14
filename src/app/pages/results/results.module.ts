import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { ResultComponent } from './component/result/result.component';


@NgModule({
  declarations: [
    ResultsComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
  ]
})
export class ResultsModule { }
