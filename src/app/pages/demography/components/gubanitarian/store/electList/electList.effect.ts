import {  Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import * as fromActions from './electList.action'
import { catchError, from, map, of, switchMap, take } from "rxjs";
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import { Result, ResultCreateRequest } from "./electList.model";
import { serverTimestamp } from "firebase/firestore";





@Injectable()
export class ResultEffects {
    constructor(private afs: AngularFirestore, private action: Actions){}

    read = createEffect(() => this.action.pipe(
        ofType(fromActions.Types.READ),
        switchMap(() => 
            this.afs.collection('result', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
                take(1),
                map((changes) => changes.map(x => extractDocumentChangeActionData(x))),
                map((result: Result[]) => new fromActions.ReadSuccess(result)),
                catchError(err => of(new fromActions.ReadError(err.message)))
            )
        )
    ))

    create = createEffect(() => this.action.pipe(
        ofType(fromActions.Types.CREATE),
        map((action: fromActions.Create) => action.result),
        map((result: ResultCreateRequest) => ({
            ...result,
            createdAt: serverTimestamp()
        })),
        switchMap((request: ResultCreateRequest) => 
            from(this.afs.collection('result').add(request)).pipe(
                map(res => ({...request, id: res.id})),
                map((result: Result) => new fromActions.CreateSuccess(result)),
                catchError(err => of(new fromActions.CreateError(err.message)))
            )
        )
    ))
}
