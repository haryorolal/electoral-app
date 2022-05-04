import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { serverTimestamp } from "firebase/firestore";
import { Observable, map, of, from, catchError, switchMap, take } from "rxjs";
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import { Candidate, CandidateCreateRequest } from "./candidate.model";
import * as fromCandidateAction from './candidate.actions';

@Injectable()
export class CandidateEffects {
    constructor(private afs: AngularFirestore, private action: Actions){}

    read = createEffect(() => this.action.pipe(
        ofType(fromCandidateAction.Types.READ),
        switchMap(() => 
            this.afs.collection('candidate', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
                take(1),
                map((changes)=> changes.map(x => extractDocumentChangeActionData(x))),
                map((candidate: Candidate[]) => new fromCandidateAction.ReadSuccess(candidate)),
                catchError(err => of(new fromCandidateAction.ReadError(err.message)))
            )
        )
    ))

    create = createEffect(() => this.action.pipe(
        ofType(fromCandidateAction.Types.CREATE),
        map((action: fromCandidateAction.Create) => action.candidate),
        map((candidate: CandidateCreateRequest) => ({
            ...candidate,
            createdAt: serverTimestamp()
        })),
        switchMap((request: CandidateCreateRequest) => 
            from(this.afs.collection('candidate').add(request)).pipe(
                map(res => ({...request, id: res.id})),
                map((candidate: Candidate) => new fromCandidateAction.CreateSuccess(candidate)),
                catchError(err => of(new fromCandidateAction.CreateError(err.message)))
            )
        )
    ))

    update = createEffect(() => this.action.pipe(
        ofType(fromCandidateAction.Types.UPDATE),
        map((action: fromCandidateAction.Update) => action.candidate),
        map((candidate: Candidate) => ({
            ...candidate,
            updatedAt: serverTimestamp()
        })),
        switchMap((candidate) => 
            from(this.afs.collection('candidate').doc(candidate.id).set(candidate)).pipe(
                map(() => new fromCandidateAction.UpdateSuccess(candidate.id, candidate)),
                catchError(err => of(new fromCandidateAction.UpdateError(err.message)))
            )
        )
    ))

    delete = createEffect(() => this.action.pipe(
        ofType(fromCandidateAction.Types.DELETE),
        map((action: fromCandidateAction.Delete) => action.id),
        switchMap(id => 
            from(this.afs.collection('candidate').doc(id).delete()).pipe(
                map(() => new fromCandidateAction.DeleteSuccess(id)),
                catchError(err => of(new fromCandidateAction.DeleteError(err.message)))
            )
        )
    ))
}