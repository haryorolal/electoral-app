import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, filter, map, take, tap } from 'rxjs';
import {Store, select} from "@ngrx/store";
import * as fromRoot from '../../store';
import * as fromUser from '../../store/user';

@Injectable({
  providedIn: 'root'
})
export class UnauthGuard implements CanActivate, CanActivateChild, CanLoad {
  
  constructor(private router: Router, private store: Store<fromRoot.State>){}

  private check(): Observable<boolean>{
    return this.store.pipe(select(fromUser.getUserState)).pipe(
      filter(state => !state.loading),
      take(1),
      tap(state => {
        if(state.uid){
          this.router.navigate(['/']);
        }
      }),
      map(state => !state.uid)
    );
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.check();
  }
}
