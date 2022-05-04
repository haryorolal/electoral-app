import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from, of, map, switchMap, catchError, take } from "rxjs";
import { extractDocumentChangeActionData } from "../../../../../shared/utils/data";
import { ElectionCreateRequest, Election } from "./election.model";
import * as fromList from './election.action'
import { serverTimestamp } from "firebase/firestore";

@Injectable()
export class ElectionEffects{
    constructor(private actions: Actions, private afs: AngularFirestore){}

    read = createEffect(() => this.actions.pipe(
        ofType(fromList.Types.READ),
        switchMap(() => 
            this.afs.collection('Election', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
                take(1),
                map(changes => changes.map(x => extractDocumentChangeActionData(x))),
                map((election:Election[]) => new fromList.ReadSuccess(election)),
                catchError(err => of(new fromList.ReadError(err.message)))
            )
        )
    ))

    create = createEffect(() => this.actions.pipe(
        ofType(fromList.Types.CREATE),
        map((action: fromList.Create) => action.election),
        map((election: ElectionCreateRequest) => ({
            ...election,
            createdAt: serverTimestamp()
        })),
        switchMap((request: ElectionCreateRequest) => 
            from(this.afs.collection('Election').add(request)).pipe(
                map(res => ({...request, id: res.id})),
                map((election: Election) => new fromList.CreateSuccess(election)),
                catchError(err => of(new fromList.CreateError(err.message)))
            )
        )
    ))

    update = createEffect(() => this.actions.pipe(
        ofType(fromList.Types.UPDATE),
        map((action: fromList.Update) => action.election),
        map((election:Election) => ({
            ...election,
            updatedAt: serverTimestamp()
        })),
        switchMap((election) => 
            from(this.afs.collection('Election').doc(election.id).set(election)).pipe(
                map(() => new fromList.UpdateSuccess(election.id, election)),
                catchError(err => of(new fromList.UpdateError(err.message)))
            )
        )
    ))

    delete = createEffect(() => this.actions.pipe(
        ofType(fromList.Types.DELETE),
        map((action: fromList.Delete) => action.id),
        switchMap(id => 
            from(this.afs.collection('Election').doc(id).delete()).pipe(
                map(() => new fromList.DeleteSuccess(id)),
                catchError(err => of(new fromList.DeleteError(err.message)))
            )
        )
    ))
}
