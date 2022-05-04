import { UserInterface } from './user.models';

import * as fromAction from './user.action'
import { ActionType } from './actionType';

export interface UserState {
    entity: UserInterface
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    entity: null,
    loading: null,
    error: null
};

export function reducer(state = initialState, action: fromAction.All): UserState {
    switch (action.type){
        case ActionType.READ: {
            return {...state, loading: true, error: null};
        }

        case ActionType.READ_SUCCESS: {
            return {...state, entity: action.user, loading: false}
        }

        case ActionType.READ_ERROR: {
            return {...state, entity: null, loading: false, error: null}
        }

        case ActionType.CLEAR: {
            return {...initialState}
        }

        default: {
            return state
        }
    }
}