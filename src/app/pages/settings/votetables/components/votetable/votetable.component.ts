import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResultInterface } from 'src/app/models/backend';
import { CandidateResult } from '../../store/electList';

@Component({
  selector: 'app-votetable',
  templateUrl: './votetable.component.html',
  styleUrls: ['./votetable.component.scss']
})
export class VotetableComponent implements OnInit {

  @Input() item: CandidateResult
  @Input() isEditable: boolean

  @Output() edit = new EventEmitter<CandidateResult>()
  @Output() delete = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(candidate: CandidateResult): void{
    this.edit.emit(candidate)
  }

  onDelete(id: string): void{
    this.delete.emit(id)
  }


}
