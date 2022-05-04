import {Election} from './election.model';
import * as fromAction from './election.action';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const listAdaptor = createEntityAdapter<Election>()

export interface electionListState extends EntityState<Election>{
    loading: boolean;
    error: string
}

export const initialState: electionListState = listAdaptor.getInitialState({
    loading: null,
    error: null
});

export function reducer(state = initialState, action: fromAction.All):  electionListState{
    switch(action.type){
        case fromAction.Types.READ: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.READ_SUCCESS: {
            return listAdaptor.addMany(action.election, {...state, loading: false})
        }

        case fromAction.Types.READ_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        //Create
        case fromAction.Types.CREATE: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.CREATE_SUCCESS:{
            return listAdaptor.addOne(action.election, state)
        }

        case fromAction.Types.CREATE_ERROR:{
            return {...state, loading: false, error: action.error}
        }

        //update

        case fromAction.Types.UPDATE: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.UPDATE_SUCCESS: {
            return listAdaptor.updateOne({id: action.id, changes: action.changes},state)
        }

        case fromAction.Types.UPDATE_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        //Delete

        case fromAction.Types.DELETE: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.DELETE_SUCCESS: {
            return listAdaptor.removeOne(action.id, state)
        }

        case fromAction.Types.DELETE_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        default: {
            return state
        }
    }
}