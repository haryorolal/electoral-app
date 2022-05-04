import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Party } from '../../store/list';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyComponent implements OnInit {

  @Input() item: Party
  @Input() isEditable: boolean

  @Output() edit = new EventEmitter<Party>()
  @Output() delete = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(party: Party): void{
    this.edit.emit(party)
  }

  onDelete(id: string): void{
    this.delete.emit(id)
  }

  

}
