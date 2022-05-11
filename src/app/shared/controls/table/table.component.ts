import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlItemInterface, Value } from '../../../models/frontend';
export { ControlItemInterface, Value } from '../../../models/frontend';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => TableComponent),
      multi: true
    }
  ]
})
export class TableComponent implements OnInit, ControlValueAccessor {

  @Input() dataSource: ControlItemInterface[];
  displayedCoumns: string[] = ['#', 'Candidates', 'VoteCount']
  @Output() changed = new EventEmitter<Value[]>();

  value: Value[]
  isDisabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  private propagateChange: any = () => {};
   //private propagateTouched: any = () => {};

   writeValue(value: Value[]): void{
     this.value = value
   }

   registerOnChange(fn: any): void {
       this.propagateChange = fn
   }

   registerOnTouched(fn: any): void {
       
   }

   setDisabledState(isDisabled: boolean): void {
       this.isDisabled = isDisabled
   }

   //on

}