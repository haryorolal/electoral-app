import { Component, ChangeDetectionStrategy, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Candidate } from '../../store/list';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateComponent implements OnInit {

  @Input() item: Candidate
  @Input() isEditable: boolean

  @Output() edit = new EventEmitter<Candidate>()
  @Output() delete = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(candidate: Candidate): void{
    this.edit.emit(candidate)
  }

  onDelete(id: string): void {
    this.delete.emit(id)
  }

}
