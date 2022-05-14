import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ControlItemInterface, ItemInterface, Value } from '../../../models/frontend';
export { ControlItemInterface, ItemInterface, Value } from '../../../models/frontend';

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
export class TableComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  @Input() public dataSource: MatTableDataSource<ItemInterface>;
  displayedColumns: string[] = ['#', 'photoUrl', 'name', 'position', 'count']
  @Output() changed = new EventEmitter<Value[]>();

  value: Value[]
  isDisabled: boolean;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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
