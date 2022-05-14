import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromElection from '../../../../store/elections'
import { Election, Elections } from 'src/app/store/elections';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultComponent implements OnInit {

  @Input() election: Elections

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new fromElection.Read())
  }


}
