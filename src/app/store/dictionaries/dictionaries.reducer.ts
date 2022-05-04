import { Dictionaries } from "./dictionaries.models";
import * as fromActions from './dictionaries.actions';
import { DictionaryActionTypes } from "./ActionType";

export interface DictionariesState {
    entities: Dictionaries;
    loading: boolean;
    error: string;
}

const initialState: DictionariesState = {
    entities: null,
    loading: null, 
    error: null
}

export function reducer(state = initialState, action: fromActions.All): DictionariesState {
    switch(action.type){
        case  DictionaryActionTypes.READ: {
            return { ...state, loading: true, error: null}
        }

        case DictionaryActionTypes.READ_SUCCESS: {
            return {...state, entities: action.dictionaries, loading: false}
        }

        case DictionaryActionTypes.READ_ERROR: {
            return {...state, entities: null, loading: false, error: action.error}
        }

        default: {
            return state
        }
    }
}