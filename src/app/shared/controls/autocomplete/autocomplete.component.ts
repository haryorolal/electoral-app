import { Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { Subject, Observable } from 'rxjs';
import { takeUntil, distinctUntilChanged, startWith, map, filter } from 'rxjs/operators';

import { ControlItemInterface, Value } from '../../../models/frontend';
export { ControlItemInterface, Value } from '../../../models/frontend';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => AutocompleteComponent),
      multi: true
    }
  ]
})
export class AutocompleteComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() controlItemInterface: ControlItemInterface[];
  @Input() placeholder: string;

  @Output() changed = new EventEmitter<Value>();

  //use formControl instead of this.value
  formControl = new FormControl();
  options$: Observable<ControlItemInterface[]>

  private destroy = new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    this.options$ = this.formControl.valueChanges.pipe(
      startWith(''),
      filter(value => typeof value === 'string' || typeof value === 'object'),
      map(value => typeof value === 'string' ? value : value.label),
      map(label => label ? this.filter(label) : this.controlItemInterface.slice())
    ); 

    this.formControl.valueChanges.pipe(
      takeUntil(this.destroy),
      distinctUntilChanged()
    ).subscribe(item => {
      const value = typeof item === 'object' ? item.value : null;
      this.propagateChange(value);
      this.changed.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next;
    this.destroy.complete;
  }

  private filter(value: string): ControlItemInterface[] {
    const filterValue = value.toLocaleLowerCase();
    return this.controlItemInterface.filter(item => item.label.toLocaleLowerCase().includes(filterValue) );
  }

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  writeValue(value:Value): void {
    const selectedOption = this.controlItemInterface.find(item => item.value === value);
    this.formControl.setValue(selectedOption);
  }

  registerOnChange(fn:any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn:any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled:boolean): void {
    if (isDisabled){
      this.formControl.disable();
    }else{
      this.formControl.enable();
    }
  }

  displayFn(controlItemInterface?: ControlItemInterface): string | undefined {
    return controlItemInterface ? controlItemInterface.label : undefined;
  }
  

  onBlur(): void {
    this.propagateTouched();
  }

}
