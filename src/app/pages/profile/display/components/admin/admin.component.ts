import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AdminModelInterface } from '../../../store/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {

  @Input() role: AdminModelInterface

  constructor() { }

  ngOnInit(): void {
  }

}
