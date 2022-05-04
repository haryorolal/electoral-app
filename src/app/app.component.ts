import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import * as fromDictionaries from './store/dictionaries';
import * as fromRoot from './store';
import * as fromUser from './store/user';

/*
import * as fromAuthAction from './pages/auth/store/authActions/auth.action';
import * as fromloginAction from './pages/auth/store/authActions/login.action';
import * as fromsignoutAction from './pages/auth/store/authActions/signout.action';
import * as fromsignupAction from './pages/auth/store/authActions/signup.action';
//efeects
import * as fromAuthEffect from './pages/auth/store/authEffects/auth.effect';
import * as fromloginEffect from './pages/auth/store/authEffects/login.effect';
import * as fromsignoutEffect from './pages/auth/store/authEffects/signout.effect';
import * as fromsignupEffect from './pages/auth/store/authEffects/signup.effect';
//reducer
import * as fromRootReducer from './pages/auth/store/auth.reducer';
//model
import * as fromRootModel from './pages/auth/store/auth.model';
//selector
import * as fromRootSelector from './pages/auth/store/auth.selectors';
*/


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Electoral';

  isAuthorized$: Observable<boolean>;
  user$: Observable<fromUser.UserInterface>

  constructor(private store: Store<fromRoot.State>){}

  ngOnInit(): void {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
    this.user$ = this.store.pipe(select(fromUser.getUser));
    
    this.store.dispatch(new fromUser.InitAction())
     this.store.dispatch(new fromDictionaries.Read())

     this.store.pipe(select(fromUser.getUserState)).pipe(
       filter(state => !!state.uid),
       take(1)
     ).subscribe(() => {
       this.store.dispatch(new fromDictionaries.Read())
     })
  }

  onsignOut(): void{
    this.store.dispatch(new fromUser.SignoutAction());
  }
  
}
