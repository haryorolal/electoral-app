import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ButtonModule, ControlsModule, FormFieldModule, InputModule, SelectModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    ButtonModule,
    ControlsModule,
    InputModule,
    SelectModule
  ]
})
export class FormModule { }
