import { CandidateResult } from "./candidate.model";
import * as fromActions from './candidate.actions';
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export const listAdaptor = createEntityAdapter<CandidateResult>();

export interface CandidateListState extends EntityState<CandidateResult>{
    loading: boolean;
    error: string;
}

export const initialState: CandidateListState = listAdaptor.getInitialState({
    loading: null, 
    error: null
})

export function reducer(state = initialState, action: fromActions.All){
    switch(action.type){
        case fromActions.Types.READ: {
            return {...state, loading: true, error: null}
        }

        case fromActions.Types.READ_SUCCESS: {
            return listAdaptor.addMany(action.candidate, {...state, loading: null})
        }

        case fromActions.Types.READ_ERROR: {
            return {...state, loading: null, error: action.error}
        }

        case fromActions.Types.CREATE: {
            return {...state, loading: false, error: null}
        }

        case fromActions.Types.CREATE_SUCCESS: {
            return listAdaptor.addOne(action.candidate, state)
        }

        case fromActions.Types.CREATE_ERROR: {
            return {...state, loading: null, error: action.error }
        }

        case fromActions.Types.UPDATE: {
            return {...state, loading: true, error: null}
        }

        case fromActions.Types.UPDATE_SUCCESS: {
            return listAdaptor.updateOne({id: action.id, changes: action.changes}, state)
        }

        case fromActions.Types.UPDATE_ERROR: {
            return {...state, loading: null, error: action.error }
        }

        case fromActions.Types.DELETE: {
            return {...state, loading: true, error: null}
        }

        case fromActions.Types.DELETE_SUCCESS: {
            return listAdaptor.removeOne(action.id, state)
        }

        case fromActions.Types.DELETE_ERROR: {
            return {...state, loading: null, error: action.error}
        }

        default: {
            return state;
        }
    }
}