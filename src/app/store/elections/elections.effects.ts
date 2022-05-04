import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable, of, zip } from "rxjs";
import { map, switchMap, catchError, take} from 'rxjs/operators';
import { Elections, Election, ItemInterface, ControlItemInterface } from "./elections.models";

import * as fromActions from './elections.actions';
import { ElectionsActionTypes } from "./ActionType";

type Action = fromActions.All;

const documentToItem = (x: DocumentChangeAction<any>): ItemInterface => {
    const data = x.payload.doc.data();
    return {
        id: x.payload.doc.id,
        ...data
    };
};

const itemsToControlItem = (x: ItemInterface): ControlItemInterface => ({
    value: x.id,
    label: x.name,
    icon: x.icon
})

const addDictionary = (itemInterfaces: ItemInterface[]): Election => ({
    itemInterfaces,
    controlItemsInterface: [...itemInterfaces].map(x => itemsToControlItem(x))
});


@Injectable()
export class ElectionEffects {

    constructor(
        private actions: Actions,
        private afs: AngularFirestore
    ){}

    read: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(ElectionsActionTypes.READ),
        switchMap(() => {
            return zip(
                this.afs.collection('Constitution').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),
                this.afs.collection('Election').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),
                this.afs.collection('Local Government').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),
                this.afs.collection('Parties').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),
                this.afs.collection('Result').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),                
                this.afs.collection('state').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),
                this.afs.collection('candidate').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),                
            ).pipe(
                map(([constitution, election, localgovernment, parties, result, state, candidate]) => {
                    const dictionary: Elections = {
                        constitution: addDictionary(constitution),
                        election: addDictionary(election),
                        localgovernment: addDictionary(localgovernment),
                        parties: addDictionary(parties),
                        result: addDictionary(result),
                        state: addDictionary(state),
                        candidate: addDictionary(candidate)
                    }
                    return new fromActions.ReadSuccess(dictionary)
                }),
                catchError(err => of(new fromActions.ReadError(err.message)))
            );
        })
    )); 
}

