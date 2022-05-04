import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { ControlItemInterface, Value } from '../../../models/frontend';
export { ControlItemInterface, Value } from '../../../models/frontend';


@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => RadiosComponent),
      multi: true
    }
  ]
})
export class RadiosComponent implements OnInit {

  @Input() controlItemInterface: ControlItemInterface[];

  @Output() changed = new EventEmitter<Value>();

  value: Value;
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  
  private propagateChange: any = () => { };
  //private propagateTouched: any = () => {};

  writeValue(value: Value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
   // this.propagateTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChanged(value: Value): void {
    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  isChecked(value: Value): boolean {
    return this.value === value;
  }

}
