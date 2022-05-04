import { Result } from "./electList.model";
import * as fromActions from './electList.action';
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export const listAdaptor = createEntityAdapter<Result>();

export interface ResultListState extends EntityState<Result>{
    loading: boolean;
    error: string;
}

export const initialState: ResultListState = listAdaptor.getInitialState({
    loading: null,
    error: null
})

export function reducer(state = initialState, action: fromActions.All){
    switch(action.type){
        case fromActions.Types.READ: {
            return {...state, loading: true, error: null}
        }

        case fromActions.Types.READ_SUCCESS: {
            return listAdaptor.addMany(action.result, {...state, loading: null})
        }

        case fromActions.Types.READ_ERROR: {
            return {...state, error: action.error, loading: null}
        }

        case fromActions.Types.CREATE: {
            return {...state, loading: true, error: null}
        }

        case fromActions.Types.CREATE_SUCCESS: {
            return listAdaptor.addOne(action.result, state)
        }

        case fromActions.Types.CREATE_ERROR: {
            return {...state, error: action.error, loading: null}
        }

        default: {
            return state
        }
    }
}