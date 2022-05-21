import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import * as fromRoot from '../../../store'
import * as fromCandidate from './store/electList'
import * as fromUser from '../../../store/user';
import { CandidateResult } from './store/electList';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-votetables',
  templateUrl: './votetables.component.html',
  styleUrls: ['./votetables.component.scss']
})
export class VotetablesComponent implements OnInit {

  result$: Observable<CandidateResult[]>
  isEditable$: Observable<boolean>
  
  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(new fromCandidate.Read());
    this.result$ = this.store.pipe(select(fromCandidate.selectAll));
    this.isEditable$ = this.store.pipe(select(fromUser.getRoleId),
      map(roleId => ['superAdmin'].includes(roleId))
    )
  }

  onAdd(): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '400px',
      data: {}
    })
  }

  onEdit(value: CandidateResult): void{
    this.dialog.open(FormComponent, {
      width: '650px',
      height: '400px',
      data: {value}
    })
  }

  onDelete(id: string): void{
    this.store.dispatch(new fromCandidate.Delete(id))
  }

}

