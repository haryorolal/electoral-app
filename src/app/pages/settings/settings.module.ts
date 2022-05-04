import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ButtonModule, FormFieldModule, InputModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';


@NgModule({
  declarations: [  
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormFieldModule,
    InputModule,
    
  ]
})
export class SettingsModule { }
