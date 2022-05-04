import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { States } from '../../store/list';



@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StateComponent implements OnInit {

  @Input() item: States
  @Input() isEditable: boolean

  @Output() edit = new EventEmitter<States>()
  @Output() delete = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(states: States): void{
    this.edit.emit(states)
  }

  onDelete(id: string): void{
    this.delete.emit(id)
  }



 

}
