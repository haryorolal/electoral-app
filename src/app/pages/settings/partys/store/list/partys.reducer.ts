import { Party } from "./partys.model";
import * as fromAction from './partys.action'
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export const listAdaptor = createEntityAdapter<Party>();

export interface PartyListState extends EntityState<Party>{
    loading: boolean;
    error: string
}

export const initialState: PartyListState = listAdaptor.getInitialState({
    loading: null,
    error: null
})

export function reducer(state = initialState, action: fromAction.All): PartyListState{
    switch (action.type){
        case fromAction.Types.READ: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.READ_SUCCESS: {
            return listAdaptor.addMany(action.party, {...state, loading: false})
        }

        case fromAction.Types.READ_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        case fromAction.Types.CREATE: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.CREATE_SUCCESS: {
            return listAdaptor.addOne(action.party, state)
        }

        case fromAction.Types.CREATE_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        case fromAction.Types.UPDATE: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.UPDATE_SUCCESS: {
            return listAdaptor.updateOne({id:action.id, changes: action.changes}, state)
        }

        case fromAction.Types.UPDATE_ERROR: {
            return {...state, loading: false, error: action.error}
        }

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