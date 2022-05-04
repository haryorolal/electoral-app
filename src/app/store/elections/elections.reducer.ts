import { Elections } from "./elections.models";
import * as fromActions from './elections.actions';
import { ElectionsActionTypes } from "./ActionType";

export interface ElectionsState {
    entities: Elections;
    loading: boolean;
    error: string;
}

const initialState: ElectionsState = {
    entities: null,
    loading: null, 
    error: null
}

export function reducer(state = initialState, action: fromActions.All): ElectionsState {
    switch(action.type){
        case  ElectionsActionTypes.READ: {
            return { ...state, loading: true, error: null}
        }

        case ElectionsActionTypes.READ_SUCCESS: {
            return {...state, entities: action.elections, loading: false}
        }

        case ElectionsActionTypes.READ_ERROR: {
            return {...state, entities: null, loading: false, error: action.error}
        }

        default: {
            return state
        }
    }
}