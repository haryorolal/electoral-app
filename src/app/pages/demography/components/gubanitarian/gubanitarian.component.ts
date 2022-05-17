import { Component, Input, OnInit } from '@angular/core';
import { Elections } from 'src/app/store/elections';

@Component({
  selector: 'app-gubanitarian',
  templateUrl: './gubanitarian.component.html',
  styleUrls: ['./gubanitarian.component.scss']
})
export class GubanitarianComponent implements OnInit {

  @Input() election: Elections;

  constructor() { }

  ngOnInit(): void {
  }

}
