import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { serverTimestamp } from "firebase/firestore";
import { catchError, from, map, of, switchMap, take } from "rxjs";
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import * as fromPositionAction from './position.action';
import { Position, PositionCreateRequest } from "./position.model";



@Injectable()
export class PositionEffects {
    constructor(private afs: AngularFirestore, private action: Actions){}

    read = createEffect(() => this.action.pipe(
        ofType(fromPositionAction.Types.READ),
        switchMap(() => this.afs.collection('votetable', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
            take(1),
            map(changes => changes.map(x => extractDocumentChangeActionData(x))),
            map((position: Position[]) => new fromPositionAction.ReadSuccess(position)),
            catchError(err => of(new fromPositionAction.ReadError(err.message)))
        ))
    ))

    create = createEffect(() => this.action.pipe(
        ofType(fromPositionAction.Types.CREATE),
        map((action: fromPositionAction.Create) => action.position),
        map((position: PositionCreateRequest) => ({
            ...position,
            createdAt: serverTimestamp()
        })),
        switchMap((request: PositionCreateRequest) => 
            from(this.afs.collection('votetable').add(request)).pipe(
                map(res => ({...request, id: res.id})),
                map((position:Position) => new fromPositionAction.CreateSuccess(position)),
                catchError(err => of(new fromPositionAction.CreateError(err.message)))
            )
        )
    ))

    update = createEffect(() => this.action.pipe(
        ofType(fromPositionAction.Types.UPDATE),
        map((action: fromPositionAction.Update) => action.position),
        map((position: Position) => ({
            ...position,
            updatedAt: serverTimestamp()
        })),
        switchMap((position) => 
            from(this.afs.collection('votetable').doc(position.id).set(position)).pipe(
                map(() => new fromPositionAction.UpdateSuccess(position.id, position)),
                catchError(err => of(new fromPositionAction.UpdateError(err.message)))
            )
        )
    ))

    delete = createEffect(() => this.action.pipe(
        ofType(fromPositionAction.Types.DELETE),
        map((action: fromPositionAction.Delete) => action.id),
        switchMap(id => 
            from(this.afs.collection('votetable').doc(id).delete()).pipe(
                map(() => new fromPositionAction.DeleteSuccess(id)),
                catchError(err => of(new fromPositionAction.DeleteError(err.message)))
            )
        )
    ))
}