import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/pages/settings/candidates/store/list';
import { Elections } from 'src/app/store/elections';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent implements OnInit {

  @Input() candidate: Candidate

  /*elections = {
    id: 'ododsjfjv',
    localGovernment: 'medie',
    photoUrl: null,
    count: 900000,
    name: 'David Kent',
    electionType: 'general',
    party: 'DDP',
    position: 'president',
    state: 'Ogun'
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
