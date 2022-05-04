import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store'
import * as fromUser from '../../../store/user'
import * as fromLocal from './store/list'


import { map, Observable } from 'rxjs';
import { Local } from './store/list';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';


@Component({
  selector: 'app-locals',
  templateUrl: './locals.component.html',
  styleUrls: ['./locals.component.scss']
})
export class LocalsComponent implements OnInit {

  local$: Observable<Local[]>
  isEditable$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.local$ = this.store.pipe(select(fromLocal.selectAll));
    this.store.dispatch(new fromLocal.Read())
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

  onEdit(value: Local): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {value}
    })
  }

  onDelete(id: string): void {
    this.store.dispatch(new fromLocal.Delete(id))
  }

}
