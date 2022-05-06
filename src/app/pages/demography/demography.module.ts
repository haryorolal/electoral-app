import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemographyComponent } from './demography.component';
import { GubanitarianComponent } from './components/gubanitarian/gubanitarian.component';


@NgModule({
  declarations: [
    DemographyComponent,
    GubanitarianComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DemographyModule { }
