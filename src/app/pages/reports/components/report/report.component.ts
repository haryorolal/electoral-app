import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Candidate } from 'src/app/pages/settings/candidates/store/list';
import * as fromElection from '../../../../store/elections';
import { Elections } from 'src/app/store/elections';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent implements OnInit {

  @Input() election: Elections

 
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new fromElection.Read())
  }

}
