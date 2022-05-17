import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Position } from './position.model';
import * as fromPositionAction from './position.action';

export const listAdaptor = createEntityAdapter<Position>();

export interface PositionListState extends EntityState<Position>{
    loading: boolean;
    error: string
}

export const initialState: PositionListState = listAdaptor.getInitialState({
    loading: null,
    error: null
})

export function reducer (state = initialState, action: fromPositionAction.All): PositionListState{
    switch(action.type){
        case fromPositionAction.Types.READ: {
            return {...state, loading: true, error: null}
        }

        case fromPositionAction.Types.READ_SUCCESS: {
            return listAdaptor.addMany(action.positon, {...state, loading: false})
        }

        case fromPositionAction.Types.READ_ERROR: {
            return {...state, loading: true, error: action.error}
        }

        case fromPositionAction.Types.CREATE: {
            return {...state, loading: true, error: null}
        }

        case fromPositionAction.Types.CREATE_SUCCESS: {
            return listAdaptor.addOne(action.positon, state)
        }

        case fromPositionAction.Types.CREATE_ERROR: {
            return {...state, loading: true, error: action.error}
        }

        case fromPositionAction.Types.UPDATE: {
            return {...state, loading: true, error: null}
        }

        case fromPositionAction.Types.UPDATE_SUCCESS: {
            return listAdaptor.updateOne({id: action.id, changes: action.changes}, state)
        }

        case fromPositionAction.Types.UPDATE_ERROR: {
            return {...state, loading: true, error: action.error}
        }

        case fromPositionAction.Types.DELETE: {
            return {...state, loading: true, error: null}
        }

        case fromPositionAction.Types.DELETE_SUCCESS: {
            return listAdaptor.removeOne(action.id, state)
        }

        case fromPositionAction.Types.DELETE_ERROR: {
            return {...state, loading: false, error: action.error}
        }

        default: {
            return state
        }

    }
}