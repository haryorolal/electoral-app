import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ButtonModule, CheckboxModule, ControlsModule, FormFieldModule, RadiosModule } from 'src/app/shared';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadiosModule,
    FormFieldModule,
    ControlsModule,
    ButtonModule,
  ],
  exports: [FormComponent]
})
export class FormModule { }
