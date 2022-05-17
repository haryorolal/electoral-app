import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { increment, serverTimestamp } from "firebase/firestore";
import { map, of, from, catchError, switchMap, take } from "rxjs";
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import { CandidateResult, CandidateResultCreateRequest } from "./candidate.model";
import * as fromCandidateAction from './candidate.actions';

@Injectable()
export class CandidateEffect {
    constructor(private afs: AngularFirestore, private action: Actions){}

    read = createEffect(() => this.action.pipe(
        ofType(fromCandidateAction.Types.READ),
        switchMap(() => 
            this.afs.collection('result', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
                take(1),
                map((changes)=> changes.map(x => extractDocumentChangeActionData(x))),
                map((candidate: CandidateResult[]) => new fromCandidateAction.ReadSuccess(candidate)),
                catchError(err => of(new fromCandidateAction.ReadError(err.message)))
            )
        )
    ))

    update = createEffect(() => this.action.pipe(
        ofType(fromCandidateAction.Types.UPDATE),
        map((action: fromCandidateAction.Update) => action.candidate),
        map((candidate: CandidateResult) => ({
            ...candidate,
            updatedAt: serverTimestamp()
        })),
        switchMap((candidate) => 
            from(this.afs.collection('result').doc(candidate.id).set(candidate)).pipe(
                map(() => this.afs.collection('result').doc(candidate.id).update({count: increment(1)} )),
                map(() => new fromCandidateAction.UpdateSuccess(candidate.id, candidate)),
                catchError(err => of(new fromCandidateAction.UpdateError(err.message)))
            )
        )
    ))
}