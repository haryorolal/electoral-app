import { ActionReducerMap } from "@ngrx/store";
import * as fromDictionaries from './dictionaries';
import * as fromElections from './elections';
import * as fromUser from './user';

export interface State { 
    dictionaries: fromDictionaries.DictionariesState;
    elections: fromElections.ElectionsState;
    user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
    dictionaries: fromDictionaries.reducer,
    elections: fromElections.reducer,
    user: fromUser.reducer
};

export const effects = [
    fromDictionaries.DictionariesEffects,
    fromElections.ElectionEffects,
    fromUser.UserEffects
];