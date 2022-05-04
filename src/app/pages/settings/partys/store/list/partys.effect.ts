import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { serverTimestamp } from "firebase/firestore";
import {from, map, of, take, switchMap, catchError } from 'rxjs';
import { extractDocumentChangeActionData } from "src/app/shared/utils/data";
import { PartyCreateRequest, Party } from "./partys.model";
import * as fromPartyAction from './partys.action'

@Injectable()
export class PartyEffects {
    constructor(private afs: AngularFirestore, private action: Actions){}

    read = createEffect(() => this.action.pipe(
        ofType(fromPartyAction.Types.READ),
        switchMap(() => this.afs.collection('Parties', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
            take(1),
            map(changes => changes.map(x => extractDocumentChangeActionData(x))),
            map((party:Party[]) => new fromPartyAction.ReadSuccess(party)),
            catchError(err => of(new fromPartyAction.ReadError(err.message)))
        ))
    ))

    create = createEffect(() => this.action.pipe(
        ofType(fromPartyAction.Types.CREATE),
        map((action: fromPartyAction.Create) => action.party),
        map((party: PartyCreateRequest) => ({
            ...party,
            createdAt: serverTimestamp()
        }) ),
        switchMap((request: PartyCreateRequest) => 
            from(this.afs.collection('Parties').add(request)).pipe(
                map(res => ({...request, id: res.id})),
                map((party:Party) => new fromPartyAction.CreateSuccess(party)),
                catchError(err => of(new fromPartyAction.CreateError(err.message)))
            )
        )
    ))

    update = createEffect(() => this.action.pipe(
        ofType(fromPartyAction.Types.UPDATE),
        map((action: fromPartyAction.Update) => action.party),
        map((party: Party) => ({
            ...party,
            updatedAt: serverTimestamp()
        })),
        switchMap((party) => 
            from(this.afs.collection('Parties').doc(party.id).set(party)).pipe(
                map(() => new fromPartyAction.UpdateSuccess(party.id, party)),
                catchError(err => of(new fromPartyAction.UpdateError(err.message)))
            )
        )
    ))

    delete = createEffect(() => this.action.pipe(
        ofType(fromPartyAction.Types.DELETE),
        map((action: fromPartyAction.Delete) => action.id),
        switchMap(id => 
            from(this.afs.collection('Parties').doc(id).delete()).pipe(
                map(() => new fromPartyAction.DeleteSuccess(id)),
                catchError(err => of(new fromPartyAction.DeleteError(err.message)))
            )
        )
    ))
}