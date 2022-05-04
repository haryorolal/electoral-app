import { Constitution } from "./constitution.model";
import * as fromActions from './constitution.action';
import { createEntityAdapter, EntityState } from "@ngrx/entity";

export const listAdaptor = createEntityAdapter<Constitution>();

export interface constitutionListState extends EntityState<Constitution>{
    loading: boolean;
    error: string
}

export const initialState: constitutionListState = listAdaptor.getInitialState({
    loading: null,
    error: null
});

export function reducer(state = initialState, action:fromActions.All): constitutionListState {
    switch(action.type){
        //Read
        case fromActions.Types.READ: {
            return {...state, loading: true, error: null};
        }

        case fromActions.Types.READ_SUCCESS: {
            return listAdaptor.addMany(action.constitution, {...state, loading:false});
        }

        case fromActions.Types.READ_ERROR: {
            return {...state, loading: false, error: action.error};
        }

        //Create
        case fromActions.Types.CREATE: {
            return {...state, loading: true, error: null};
        }

        case fromActions.Types.CREATE_SUCCESS: {
            return listAdaptor.addOne(action.constitution, state);
        }

        case fromActions.Types.CREATE_ERROR: {
            return {...state, loading: false, error:action.error}
        }

        //Update

        case fromActions.Types.UPDATE: {
            return {...state, loading: true, error: null}
        }

        case fromActions.Types.UPDATE_SUCCESS:{
            return listAdaptor.updateOne({
                id: action.id,
                changes: action.changes
            }, state)
        }

        case fromActions.Types.UPDATE_ERROR:{
            return {...state, loading: false, error: action.error}
        }

        //Delete
        case fromActions.Types.DELETE: {
            return {...state, loading: true, error: null}
        }

        case fromActions.Types.DELETE_SUCCESS: {
            return listAdaptor.removeOne(action.id, state)
        }

        case fromActions.Types.DELETE_ERROR:{
            return {...state, loading: false, error: action.error}
        }

        default: {
            return state
        }


    }
}