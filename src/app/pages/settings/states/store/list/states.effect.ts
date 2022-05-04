import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { serverTimestamp } from "firebase/firestore";
import {from, map, of, take, switchMap, catchError} from 'rxjs';
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import { StatesCreateRequest, States } from "./states.model";
import * as fromStatesAction from './states.action';

@Injectable()
export class StatesEffects {
    constructor(private afs: AngularFirestore, private action: Actions){}

    read = createEffect(() => this.action.pipe(
        ofType(fromStatesAction.Types.READ),
        switchMap(() => this.afs.collection('state', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
            take(1),
            map(changes => changes.map(x => extractDocumentChangeActionData(x))),
            map((states: States[]) => new fromStatesAction.ReadSuccess(states)),
            catchError(err => of(new fromStatesAction.ReadError(err.message)))
        ))
    ))

    create = createEffect(() => this.action.pipe(
        ofType(fromStatesAction.Types.CREATE),
        map((action: fromStatesAction.Create) => action.states),
        map((states: StatesCreateRequest) => ({
            ...states,
            createdAt: serverTimestamp()
        })),
        switchMap((request: StatesCreateRequest) => 
            from(this.afs.collection('state').add(request)).pipe(
                map(res => ({...request, id: res.id})),
                map((states:States) => new fromStatesAction.CreateSuccess(states)),
                catchError(err => of(new fromStatesAction.CreateError(err.message)))
            )
        )
    ))

    update = createEffect(() => this.action.pipe(
        ofType(fromStatesAction.Types.UPDATE),
        map((action: fromStatesAction.Update) => action.states),
        map((states: States) => ({
            ...states,
            updatedAt: serverTimestamp()
        })),
        switchMap((states) => 
            from(this.afs.collection('state').doc(states.id).set(states)).pipe(
                map(() => new fromStatesAction.UpdateSuccess(states.id, states)),
                catchError(err => of(new fromStatesAction.UpdateError(err.message)))
            )
        )
    ))

    delete = createEffect(() => this.action.pipe(
        ofType(fromStatesAction.Types.DELETE),
        map((action: fromStatesAction.Delete) => action.id),
        switchMap(id => 
            from(this.afs.collection('state').doc(id).delete()).pipe(
                map(() => new fromStatesAction.DeleteSuccess(id)),
                catchError(err => of(new fromStatesAction.DeleteError(err.message)))
            )    
        )
    ))
}