import { Component, Input, OnInit } from '@angular/core';
import { Elections } from 'src/app/store/elections';

@Component({
  selector: 'app-gubanitarian',
  templateUrl: './gubanitarian.component.html',
  styleUrls: ['./gubanitarian.component.scss']
})
export class GubanitarianComponent implements OnInit {

  @Input() election: Elections;
  currentDate: Date

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date()
    console.log(this.currentDate)
  }

  

}
