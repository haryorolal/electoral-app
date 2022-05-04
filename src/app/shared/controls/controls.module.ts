import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { PasswordModule } from './password/password.module';
import { SelectModule } from './select/select.module';
import { RadiosModule } from './radios/radios.module';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DateRangeModule } from './date-range/date-range.module';
import { DateModule } from './date/date.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    AutocompleteModule,
    RadiosModule,
    CheckboxModule,
    DateModule,
    DateRangeModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    PasswordModule,
    SelectModule,
    AutocompleteModule,
    RadiosModule, 
    CheckboxModule,
    DateModule,
    DateRangeModule
  ]
})
export class ControlsModule { }
