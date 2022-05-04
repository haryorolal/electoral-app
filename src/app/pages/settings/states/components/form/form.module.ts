import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, ControlsModule, FormFieldModule, InputModule } from 'src/app/shared';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    ButtonModule,
    ControlsModule
  ]
})
export class FormModule { }
