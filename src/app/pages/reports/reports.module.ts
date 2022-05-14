import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './reports.component';
import { TableModule } from 'src/app/shared';


@NgModule({
  declarations: [
    ReportComponent,
    ReportsComponent,
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class ReportsModule { }
