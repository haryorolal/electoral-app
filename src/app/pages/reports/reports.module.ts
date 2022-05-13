import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './reports.component';
import { TableModule } from 'src/app/shared';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    ReportComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('report', reducers),
    EffectsModule.forFeature(effects),
    TableModule
  ]
})
export class ReportsModule { }
