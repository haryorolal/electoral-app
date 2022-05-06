import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { ReportsComponent } from './reports.component';



@NgModule({
  declarations: [
    ReportComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReportsModule { }
