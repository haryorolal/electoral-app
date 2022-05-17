import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Position } from '../../store/positionList';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  @Input() item: Position
  @Input() isEditable: boolean

  @Output() edit = new EventEmitter<Position>();
  @Output() delete = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(position: Position): void {
    this.edit.emit(position);
  }

  onDelete(id: string): void{
    this.delete.emit(id);
  }

}
