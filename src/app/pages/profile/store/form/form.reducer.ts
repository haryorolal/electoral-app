import { ProfileFormInterface } from "./form.model";

import * as fromActions from './form.action';
import { ActionType } from "./actionType";

export type FormState = ProfileFormInterface;

const initialState: FormState = {
    personal: null,
    personal2: null
}

export function reducer(state = initialState, action: fromActions.All): FormState {
    switch(action.type){
        case ActionType.SET: {
            return { ...state, ...action.form};
        }

        case ActionType.UPDATE: {
            return { ...state, ...action.changes};
        }

        case ActionType.CLEAR: {
            return { ...initialState};
        }

        default: {
            return state
        }
    }
}