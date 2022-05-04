import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ButtonModule, ControlsModule, InputModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    ControlsModule
  ]
})
export class FormModule { }
