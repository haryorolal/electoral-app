import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { States } from './store/list';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store'
import * as fromUser from '../../../store/user'
import * as fromStates from './store/list'
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  states$: Observable<States[]>
  isEditable$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(new fromStates.Read());
    this.states$ = this.store.pipe(select(fromStates.selectAll));
    this.isEditable$ = this.store.pipe(select(fromUser.getRoleId),
      map(roleId => ['superAdmin', 'admin'].includes(roleId))
    )
  }

  onAdd(): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {}
    })
  }

  onEdit(value: States): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {value}
    })
  }

  onDelete(id: string): void{
    this.store.dispatch(new fromStates.Delete(id))
  }

}
