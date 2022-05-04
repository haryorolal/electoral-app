import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';
import { map } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store'
import * as fromUser from '../../../store/user'
import * as fromConstitution from './store/list'
import { Constitution } from './store/list';

@Component({
  selector: 'app-constitutions',
  templateUrl: './constitutions.component.html',
  styleUrls: ['./constitutions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConstitutionsComponent implements OnInit {

  constitution$: Observable<Constitution[]>
  isEditable$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.constitution$ = this.store.pipe(select(fromConstitution.selectAll));
    this.store.dispatch(new fromConstitution.Read());
    this.isEditable$ = this.store.pipe(
      select(fromUser.getRoleId),
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

  onEdit(value: Constitution): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '300px',
      data: {value}
    })
  }

  onDelete(id: string): void{
    this.store.dispatch(new fromConstitution.Delete(id))
  }

}
