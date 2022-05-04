import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromStatesReducer from './list/states.reducer';
import { StatesEffects } from "./list/states.effect";

export class statesFormState{
    statesList: fromStatesReducer.StatesListState
}

export const reducers: ActionReducerMap<statesFormState> = {
    statesList: fromStatesReducer.reducer
}

export const effects: any[] = [
    StatesEffects
]

export const getStatesState = createFeatureSelector<statesFormState>('states')