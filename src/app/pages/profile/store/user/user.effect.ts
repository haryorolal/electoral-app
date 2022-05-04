import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable, map, switchMap, catchError, take, of } from "rxjs";
import { UserInterface } from "./user.models";
import * as fromActions from './user.action';
import { ActionType } from "./actionType";

type Action = fromActions.All;

@Injectable()
export class UserEffects {
    constructor(private actions: Actions, private afs: AngularFirestore) {
        
    }

    read: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ActionType.READ),
        switchMap((action: fromActions.Read) => 
            this.afs.doc<UserInterface>(`users/${action.id}`).valueChanges().pipe(
                take(1),
                map((user) => new fromActions.ReadSuccess(user)),
                catchError(err => of(new fromActions.ReadError(err.message)))
            )
        )
    ));

    
}