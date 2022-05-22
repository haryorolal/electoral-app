import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ResultInterface } from 'src/app/models/backend';
import * as fromRoot from '../../../../store';
import * as fromElection from '../../../../store/elections';
import { Elections } from '../../../../store/elections';
import * as fromCandidate from './store/electResultList'
import { CandidateResult } from './store/electResultList';



@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit {

  election$: Observable<fromElection.Elections>
  election: Elections
  isVoteCasted: boolean
  

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.election$ = this.store.pipe(select(fromElection.getElectionList))
    this.election$.subscribe(res => {
      this.election = res
    })
    
  }

}
