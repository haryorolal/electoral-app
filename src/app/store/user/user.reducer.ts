import { UserInterface } from "./user.model";
import * as fromUserActions from './user.action';
//import { createReducer, on } from "@ngrx/store";
import { ActionTypes } from "./actionType";

export interface UserState { 
    entity: UserInterface;
    uid: string;
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    entity: undefined,
    uid: null,
    loading: null,
    error: null
}



//Auth
export function reducer (state = initialState, action: fromUserActions.All): UserState {
    switch(action.type){
        case ActionTypes.INIT: {
            return { ...state, loading: true};
        }

        case ActionTypes.INIT_AUTHORIZED: {
            return { ...state, entity: action.user, uid: action.uid, loading: false, error: null };
        }

        case ActionTypes.INIT_UNAUTHORIZED: {
            return { ...state, entity: null, loading: false, error: null};
        }

        case ActionTypes.INIT_ERROR: {
            return { ...state, error: action.error, loading: false};
        }
        
        //signin
        case ActionTypes.SIGN_IN_EMAIL: {
            return { ...state, loading: true};
        }

        case ActionTypes.SIGN_IN_EMAIL_SUCCESS: {
            return { ...state, uid: action.uid, loading: false }
        }

        case ActionTypes.SIGN_IN_EMAIL_ERROR: {
            return { ...state, error: action.error, loading: false}
        }

        //signup
        case ActionTypes.SIGN_UP_EMAIL: {
            return {...state, loading: true}
        }

        case ActionTypes.SIGN_UP_EMAIL_SUCCESS: {
            return { ...state, uid: action.uid, loading: false}
        }

        case ActionTypes.SIGN_UP_EMAIL_ERROR: {
            return { ...state, error: action.error, loading: false}
        }

        //signout
        case ActionTypes.SIGN_OUT: {
            return {...state, loading: true};
        }
        case ActionTypes.SIGN_OUT_SUCCESS: {
            return {...initialState}
        }
        case ActionTypes.SIGN_OUT_ERROR: {
            return {...state, error: action.error, loading: false}
        }

        //Create
        case ActionTypes.CREATE: {
            return {...state, loading: true, error: null};
        }

        case ActionTypes.CREATE_SUCCESS: {
            return {...state, entity: action.user, loading: false};
        }

        case ActionTypes.CREATE_ERROR: {
            return {...state, loading: false, error: action.error};
        }

        //Update
        case ActionTypes.UPDATE: {
            return {...state, loading: true, error: null};
        }

        case ActionTypes.UPDATE_SUCCESS: {
            return {...state, entity: action.user, loading: false};
        }

        case ActionTypes.UPDATE_ERROR: {
            return {...state, loading: false, error: action.error};
        }

        default: {
            return state
        }
    }
}







