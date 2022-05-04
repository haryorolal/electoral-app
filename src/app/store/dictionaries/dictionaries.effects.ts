import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Observable, of, zip } from "rxjs";
import { map, switchMap, catchError, take} from 'rxjs/operators';
import { Dictionaries, Dictionary, ItemInterface, ControlItemInterface } from "./dictionaries.models";

import * as fromActions from './dictionaries.actions';
import { DictionaryActionTypes } from "./ActionType";
import * as jsonCountries from '../../../assets/countries.json';

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

const addDictionary = (itemInterfaces: ItemInterface[]): Dictionary => ({
    itemInterfaces,
    controlItemsInterface: [...itemInterfaces].map(x => itemsToControlItem(x))
});


@Injectable()
export class DictionariesEffects {

    constructor(
        private actions: Actions,
        private afs: AngularFirestore
    ){}

    read: Observable<Action> = createEffect(() => this.actions.pipe(
        ofType(DictionaryActionTypes.READ),
        switchMap(() => {
            return zip(                
                this.afs.collection('roles').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),
                this.afs.collection('code').snapshotChanges().pipe(
                    take(1),
                    map(items => items.map(x => documentToItem(x)))
                ),
                of((jsonCountries as any).default.map(country => ({
                        id: country.code.toUpperCase(),
                        name: country.name,
                        icon: {
                            src: null,
                            cssClass: 'fflag fflag-' + country.code.toUpperCase()
                        }
                    })
                ))
            ).pipe(
                map(([roles, code, countries]) => {
                    const dictionary: Dictionaries = {
                        roles: addDictionary(roles),
                        code: addDictionary(code),
                        countries: addDictionary(countries)
                    }
                    return new fromActions.ReadSuccess(dictionary)
                }),
                catchError(err => of(new fromActions.ReadError(err.message)))
            );
        })
    )); 
}

