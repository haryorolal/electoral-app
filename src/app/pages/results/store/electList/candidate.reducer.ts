import { Candidate } from "./candidate.model";
import * as fromActions from './candidate.actions';
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export const listAdaptor = createEntityAdapter<Candidate>();

export interface CandidateListState extends EntityState<Candidate>{
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

        default: {
            return state;
        }
    }
}