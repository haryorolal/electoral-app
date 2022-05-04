import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { VoterInterface } from '../../../store/user';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VoterComponent implements OnInit {

  @Input() role: VoterInterface

  constructor() { }

  ngOnInit(): void {
  }

}
