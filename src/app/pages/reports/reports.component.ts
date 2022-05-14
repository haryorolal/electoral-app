import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CandidateInterface } from 'src/app/models/backend';

import * as fromRoot from '../../store';
import * as fromElection from '../../store/elections';
import { Elections } from '../../store/elections';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent implements OnInit {

  elections$: Observable<fromElection.Elections>

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromElection.Read())
    this.elections$ = this.store.pipe(select(fromElection.getElectionList))
    
    
  }

}
