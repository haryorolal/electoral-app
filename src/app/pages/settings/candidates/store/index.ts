import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import {CandidateEffects} from './list/candidate.effects';
import * as fromReducer from './list/candidate.reducer';

export interface CandidateFormInterface {
    candidateListState: fromReducer.CandidateListState
}

export const reducers: ActionReducerMap<CandidateFormInterface> = {
    candidateListState: fromReducer.reducer
}

export const effects: any[] = [
    CandidateEffects
]

export const getCandidateState = createFeatureSelector<CandidateFormInterface>('candidates')