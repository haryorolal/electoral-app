import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../../store';
//import * as fromUser from '../../../../store/user';
import * as fromElection from '../../../../store/elections';
//import * as fromResult from './store1/electList';
import * as fromCandidate from './store/electList'
import { UserInterface } from '../../../../store/user';
//import { Result } from './store1/electList';
import { Candidate } from './store/electList';



@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit {

  election$: Observable<fromElection.Elections>
  isVoteCasted: boolean
  //user$: Observable<UserInterface>;
  //result$: Observable<Result[]>
  candidates$: Observable<Candidate[]>

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    //this.store.dispatch(new fromResult.Read())
    this.store.dispatch(new fromCandidate.Read())
    this.election$ = this.store.pipe(select(fromElection.getElectionList))
    this.candidates$ = this.store.pipe(select(fromCandidate.selectAll));
    this.candidates$.subscribe(res => console.log(res))
    //this.user$ = this.store.pipe(select(fromUser.getUser))
    //this.result$ = this.store.select(fromResult.selectAll);
    //this.result$.subscribe(res => console.log(res))
  }

}
