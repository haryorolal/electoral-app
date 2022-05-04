import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Observable, take, filter } from "rxjs";

import { Store, select } from "@ngrx/store";
import * as fromRoot from '../../../store';
import * as fromUser from '../../../store/user';

@Injectable()
export class UserResolver implements Resolve<fromUser.UserInterface> {
    
    constructor(private store: Store<fromRoot.State>) {      
    }
    
    resolve(): Observable<fromUser.UserInterface> {
        return this.store.pipe(select(fromUser.getUser), filter(user => !!user), take(1))
    }


    
}
