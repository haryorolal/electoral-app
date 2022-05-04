import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';

export interface Value {
  from: number;
  to: number;
}

export interface Placeholder {
  from: string;
  to: string;
}

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => DateRangeComponent),
      multi: true
    }
  ]
})
export class DateRangeComponent implements OnInit, ControlValueAccessor {

  forms: FormGroup;

  @Input() placeholders: Placeholder;
  
  @Output() changed = new EventEmitter<Value>();

  value: Value;
  isDisabled: boolean;

  constructor(private formbuild: FormBuilder) { }

  
  ngOnInit(): void {
    this.setFormState();
  }

  setFormState(): void {
    this.forms = this.formbuild.group({
      from: [null],
      to: [null],
    });
  }

  get min(): Date {
    const from = this.forms.controls.from.value;
    return from ? new Date(from) : null;
  }

  get max(): Date {
    const to = this.forms.controls.to.value;
    return to ? new Date(to) : null;
  }

 
  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value:Value): void {
    this.forms.patchValue(value || {});
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if(isDisabled){
      this.forms.disable();
    }else{
      this.forms.enable();
    }
  }

  onChanged(): void {
    const value = { ...this.forms.value };
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onClosed(): void {
    this.propagateTouched();
  }

}
