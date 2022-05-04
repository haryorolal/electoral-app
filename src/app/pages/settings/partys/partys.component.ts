import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';
import * as fromParty from './store/list';

import { map, Observable } from 'rxjs';
import { Party } from './store/list';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-partys',
  templateUrl: './partys.component.html',
  styleUrls: ['./partys.component.scss']
})
export class PartysComponent implements OnInit {

  party$: Observable<Party[]>
  isEditable$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.party$ = this.store.pipe(select(fromParty.selectAll));
    this.store.dispatch(new fromParty.Read())
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

  onEdit(value: Party): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {value}
    })
  }

  onDelete(id: string): void{
    this.store.dispatch(new fromParty.Delete(id))
  }

}
