import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ButtonModule, ControlsModule, FormFieldModule, SelectModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    ControlsModule,
    ButtonModule,
    SelectModule
  ],
  exports: [FormComponent]
})
export class FormModule { }
