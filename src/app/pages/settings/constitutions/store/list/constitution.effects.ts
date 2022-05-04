import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable, from, of } from "rxjs";
import { map, switchMap, catchError, take } from 'rxjs/operators';

import { extractDocumentChangeActionData } from "../../../../../shared/utils/data";

import { ConstitutionCreateRequest, Constitution } from "./constitution.model";

import * as listActions from './constitution.action';
import { serverTimestamp } from "firebase/firestore";

//type Action = listActions.All;

@Injectable()
export class ConstitutionEffects {
    constructor(private actions: Actions, private afs: AngularFirestore ){}

    read = createEffect(() => this.actions.pipe(
        ofType(listActions.Types.READ),
        switchMap(() => 
            this.afs.collection('Constitution', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
                take(1),
                map(changes => changes.map(x => extractDocumentChangeActionData(x))),
                map((constitution: Constitution[]) => new listActions.ReadSuccess(constitution)),
                catchError(err => of(new listActions.ReadError(err.message)))
            )
        )
    ))

    create = createEffect(() => this.actions.pipe(
        ofType(listActions.Types.CREATE),
        map((action: listActions.Create) => action.constitution),
        map((constitution: ConstitutionCreateRequest) => ({
            ...constitution,
            createdAt: serverTimestamp()
        })),
        switchMap((request: ConstitutionCreateRequest) => 
        from(this.afs.collection('Constitution').add(request)).pipe(
            map(res => ({...request, id: res.id})),
            map((constitution: Constitution) => new listActions.CreateSuccess(constitution)),
            catchError(err => of(new listActions.CreateError(err.message)))
        )
        )
    ))

    update = createEffect(() => this.actions.pipe(
        ofType(listActions.Types.UPDATE),
        map((action: listActions.Update) => action.constitution),
        map((constitution: Constitution) => ({
            ...constitution,
            updatedAt: serverTimestamp()
        })),
        switchMap((constitution) => 
            from(this.afs.collection('Constitution').doc(constitution.id).set(constitution)).pipe(
                map(() => new listActions.UpdateSuccess(constitution.id, constitution)),
                catchError(err => of(new listActions.UpdateError(err.message)))
            )
        )
    ))

    delete = createEffect(() => this.actions.pipe(
        ofType(listActions.Types.DELETE),
        map((action: listActions.Delete) => action.id),
        switchMap(id => 
                from(this.afs.collection('Constitution').doc(id).delete()).pipe(
                    map(() => new listActions.DeleteSuccess(id)),
                    catchError(err => of(new listActions.DeleteError(err.message)))
                )
            )
    ))
}
