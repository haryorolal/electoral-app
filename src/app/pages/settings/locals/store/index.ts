import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromLocalReducer from './list/locals.reducer';
import { LocalEffects } from "./list/locals.effect";

export class LocalFormState {
    localList: fromLocalReducer.LocalListState
}

export const reducers: ActionReducerMap<LocalFormState> = {
    localList: fromLocalReducer.reducer
}

export const effects: any[] = [
    LocalEffects
]

export const getLocalState = createFeatureSelector<LocalFormState>('local')