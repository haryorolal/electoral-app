import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CandidateInterface } from 'src/app/models/backend';

import * as fromRoot from '../../store';
import * as fromElection from '../../store/elections';
import * as fromCandidate from './store/electReport';
import { Candidate } from './store/electReport';
import { Elections } from '../../store/elections';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsComponent implements OnInit {

  elections$: Observable<fromElection.Elections>
  election: Elections
  candidates$: Observable<fromCandidate.Candidate[]>

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromCandidate.Read());
    this.candidates$ = this.store.pipe(select(fromCandidate.selectAll));
    this.candidates$.subscribe(res => 
      console.log(res)
    )    
    
    
  }

}
