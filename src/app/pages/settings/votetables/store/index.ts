import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import {CandidateEffect} from './electList/candidate.effects';
import * as fromReducer from './electList/candidate.reducer';

export interface CandidateFormInterface {
    candidateListState: fromReducer.CandidateListState
}

export const reducers: ActionReducerMap<CandidateFormInterface> = {
    candidateListState: fromReducer.reducer
}

export const effects: any[] = [
    CandidateEffect
]

export const getCandidateState = createFeatureSelector<CandidateFormInterface>('CreateElection')