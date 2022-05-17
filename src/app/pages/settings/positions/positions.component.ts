import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';
import * as fromPositions from './store/positionList';
import { map, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';
import { Position } from './store/positionList';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  isEditable$: Observable<boolean>
  positions$: Observable<Position[]>

  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(new fromPositions.Read());
    this.positions$ = this.store.pipe(select(fromPositions.selectAll));
    this.isEditable$ = this.store.pipe(select(fromUser.getRoleId),
      map(roleId => ['admin', 'superAdmin'].includes(roleId))
    )
  }

  onAdd(): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {}
    })
  }

  onEdit(value: Position): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {value}
    })
  }

  onDelete(id: string): void{
    this.store.dispatch(new fromPositions.Delete(id))
  }

}
