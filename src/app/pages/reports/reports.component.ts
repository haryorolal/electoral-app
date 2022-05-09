import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CandidateInterface } from 'src/app/models/backend';

import * as fromRoot from '../../store';
import * as fromElection from '../../store/elections';
import { Election, Elections } from '../../store/elections';
import { Candidate } from '../settings/candidates/store/list';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent implements OnInit {

  //election$: Observable<fromElection.Elections>
  candidate$: Observable<Candidate>

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromElection.Read());
    //this.candidate$ = this.store.pipe(select(fromElection.getCandidate));
    //this.candidate$.subscribe(res => res.)
  }

}
