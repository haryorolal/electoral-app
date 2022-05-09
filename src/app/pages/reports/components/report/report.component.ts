import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/pages/settings/candidates/store/list';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() Candidates: Candidate

  constructor() { }

  ngOnInit(): void {
  }

}
