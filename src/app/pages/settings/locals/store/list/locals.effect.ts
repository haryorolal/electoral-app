import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { serverTimestamp } from "firebase/firestore";
import { from, map, of, take, switchMap, catchError } from "rxjs";
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import { LocalCreateRequest, Local } from "./locals.model";
import * as fromListAction from './locals.action';

@Injectable()
export class LocalEffects {
    constructor(private afs: AngularFirestore, private action: Actions){}

    read = createEffect(() => this.action.pipe(
        ofType(fromListAction.Types.READ),
        switchMap(() => this.afs.collection('Local Government', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
         take(1),
         map(changes => changes.map(x => extractDocumentChangeActionData(x))),
         map((local: Local[]) => new fromListAction.ReadSuccess(local)),
         catchError(err => of(new fromListAction.ReadError(err.message)))
        )
        )
    ))

    create = createEffect(() => this.action.pipe(
        ofType(fromListAction.Types.CREATE),
        map((action: fromListAction.Create) => action.local),
        map((local:LocalCreateRequest) => ({
            ...local,
            createdAt: serverTimestamp()
        })),
        switchMap((request: LocalCreateRequest) => 
            from(this.afs.collection('Local Government').add(request)).pipe(
                map(res => ({...request, id: res.id})),
                map((local:Local) => new fromListAction.CreateSuccess(local)),
                catchError(err => of(new fromListAction.CreateError(err.message)))
            )
        )
    ))

    update = createEffect(() => this.action.pipe(
        ofType(fromListAction.Types.UPDATE),
        map((action: fromListAction.Update) => action.local),
        map((local: Local) => ({
            ...local,
            updatedAt: serverTimestamp()
        })),
        switchMap((local) => 
            from(this.afs.collection('Local Government').doc(local.id).set(local)).pipe(
                map(() => new fromListAction.UpdateSuccess(local.id, local)),
                catchError(err => of(new fromListAction.UpdateError(err.message)))
            )
        )
    ))

    delete = createEffect(() => this.action.pipe(
        ofType(fromListAction.Types.DELETE),
        map((action: fromListAction.Delete) => action.id),
        switchMap(id => 
            from(this.afs.collection('Local Government').doc(id).delete()).pipe(
                map(() => new fromListAction.DeleteSuccess(id)),
                catchError(err => of(new fromListAction.DeleteError(err.message)))
            )
        )
    ))
}