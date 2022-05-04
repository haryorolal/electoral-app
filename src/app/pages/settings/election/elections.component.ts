import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store'
import * as fromUser from '../../../store/user'
import * as fromElection from './store/list'
import { Election } from './store/list';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.scss']
})
export class ElectionsComponent implements OnInit {

  election$: Observable<Election[]>
  isEditable$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.election$ = this.store.pipe(select(fromElection.selectAll));
    this.store.dispatch(new fromElection.Read())
    this.isEditable$ = this.store.pipe(select(fromUser.getRoleId),
      map(roleId => ['superAdmin'].includes(roleId))
    )
  }

  onAdd(): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {}
    })
  }

  onEdit(value: Election): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {value}
    })
  }

  onDelete(id: string): void{
    this.store.dispatch(new fromElection.Delete(id))
  }

}
