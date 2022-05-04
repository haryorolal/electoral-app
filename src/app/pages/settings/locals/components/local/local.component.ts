import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Local } from '../../store/list';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalComponent implements OnInit {

 @Input() item: Local
 @Input() isEditable: boolean

 @Output() edit = new EventEmitter<Local>()
 @Output() delete = new EventEmitter<string>()


  constructor() { }

  ngOnInit(): void {
  }


  onEdit(local: Local): void{
    this.edit.emit(local)
  }

  onDelete(id: string): void{
    this.delete.emit(id)
  }
  

}
