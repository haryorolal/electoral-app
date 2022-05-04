import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromList from './list/constitution.reducer';
import { ConstitutionEffects } from "./list/constitution.effects";

export interface ConstitutionFormState {
    constitutionlist: fromList.constitutionListState
}

export const reducers: ActionReducerMap<ConstitutionFormState> = {
    constitutionlist: fromList.reducer
}

export const effects: any[] = [
    ConstitutionEffects
];

export const getConstitutionState = createFeatureSelector<ConstitutionFormState>('constitution')