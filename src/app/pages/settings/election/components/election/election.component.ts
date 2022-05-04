import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Election } from '../../store/list/election.model';




@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectionComponent implements OnInit {

  @Input() item: Election;
  @Input() isEditable: boolean;

  @Output() edit = new EventEmitter<Election>();
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

 
  onEdit(election: Election): void{
    this.edit.emit(election)
  }

  onDelete(id: string): void{
    this.delete.emit(id)
  }

  
}
