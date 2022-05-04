import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../store';
import * as fromCandidate from './store/list';
import * as fromUser from '../../../store/user';
import { Candidate } from './store/list';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';


@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidatesComponent implements OnInit {

  candidates$: Observable<Candidate[]>
  isEditable$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(new fromCandidate.Read())
    this.candidates$ = this.store.pipe(select(fromCandidate.selectAll))
    
    this.isEditable$ = this.store.pipe(select(fromUser.getRoleId),
      map(roleId => ['superAdmin', 'admin'].includes(roleId))
    )
  }

  onAdd(): void{
    this.dialog.open(FormComponent, {
      width: '700px',
      height: '650px',
      data: {}
    })
  }

  onEdit(value: Candidate): void{
    this.dialog.open(FormComponent, {
      width: '700px',
      height: '650px',
      data: {value}
    })
  }

  onDelete(id: string): void{
    this.store.dispatch(new fromCandidate.Delete(id))
  }

}
