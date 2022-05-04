import { States } from "./states.model";
import * as fromAction from './states.action';
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export const listAdaptor = createEntityAdapter<States>();

export interface StatesListState extends EntityState<States>{
    loading: boolean;
    error: string
}

export const initialState: StatesListState = listAdaptor.getInitialState({
    loading: null,
    error: null
})

export function reducer (state = initialState, action: fromAction.All): StatesListState{
    switch (action.type){
        case fromAction.Types.READ: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.READ_SUCCESS: {
            return listAdaptor.addMany(action.states, {...state, loading: false})
        }

        case fromAction.Types.READ_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        case fromAction.Types.CREATE: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.CREATE_SUCCESS: {
            return listAdaptor.addOne(action.states, state)
        }

        case fromAction.Types.CREATE_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        case fromAction.Types.UPDATE: {
            return {...state, loading: true, error: null}
        }

        case fromAction.Types.UPDATE_SUCCESS: {
            return listAdaptor.updateOne({id: action.id, changes: action.changes}, state)
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