import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemographyRoutingModule } from './demography-routing.module';
import { DemographyComponent } from './demography.component';


@NgModule({
  declarations: [
    DemographyComponent
  ],
  imports: [
    CommonModule,
    DemographyRoutingModule    
  ]
})
export class DemographyModule { }
