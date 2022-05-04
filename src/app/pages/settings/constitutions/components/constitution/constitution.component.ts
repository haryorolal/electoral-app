import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Constitution } from '../../store/list/constitution.model';



@Component({
  selector: 'app-constitution',
  templateUrl: './constitution.component.html',
  styleUrls: ['./constitution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstitutionComponent implements OnInit {

  @Input() item: Constitution;
  @Input() isEditable: boolean;

  @Output() edit = new EventEmitter<Constitution>();
  @Output() delete = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
    
  }

  onEdit(constitution: Constitution): void{
    this.edit.emit(constitution);
  }

  onDelete(id: string): void{
    this.delete.emit(id);
  }

  



}
