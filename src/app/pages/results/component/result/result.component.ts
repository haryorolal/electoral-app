import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Candidate } from '../../store/electList';
import * as fromCandidate from '../../store/electList'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent implements OnInit {

  @Input() candidate: Candidate;
  //Winner: string

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new fromCandidate.Read())
  }


}
