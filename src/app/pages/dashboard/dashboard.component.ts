import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as fromRoot from "../../store"
import * as fromUser from '../../store/user';
import { Store, select } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  user$: Observable<fromUser.UserInterface>;
  isProfileCompleted$: Observable<boolean>

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    //this.user$ = this.store.pipe(select(fromUser.getUser));
    
    this.isProfileCompleted$ = this.store.pipe(select(fromUser.getUser),
    map(user => user && user.isCompleted === true ))
  }

}
