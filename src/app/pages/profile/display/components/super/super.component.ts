import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SuperAdminInterface } from '../../../store/user';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuperComponent implements OnInit {
  @Input() role: SuperAdminInterface

  constructor() { }

  ngOnInit(): void {
  }

}
