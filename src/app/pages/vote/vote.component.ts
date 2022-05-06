import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as fromElection from '../../store/elections';
import * as fromRoot from '../../store'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoteComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromElection.Read())
  }

}
