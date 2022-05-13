import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { map, of, from, catchError, switchMap, take } from "rxjs";
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import { Candidate } from "./report.model";
import * as fromCandidateAction from './report.actions';

@Injectable()
export class ReportEffect {
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
}