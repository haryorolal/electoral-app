import { ActionReducerMap, createFeatureSelector } from "@ngrx/store"
import * as fromPositionReducer from './positionList/position.reducer';
import { PositionEffects } from "./positionList";

export class PositionFormState {
    positionList: fromPositionReducer.PositionListState
}

export const reducers: ActionReducerMap<PositionFormState> = {
    positionList: fromPositionReducer.reducer
}

export const effects: any[] = [
    PositionEffects
]

export const getPositionState = createFeatureSelector<PositionFormState>('positions')