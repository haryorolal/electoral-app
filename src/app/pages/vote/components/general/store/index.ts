import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import {CandidateEffect} from './electResultList/candidate.effects';
import * as fromReducer from './electResultList/candidate.reducer';

export interface CandidateFormInterface {
    candidateListState: fromReducer.CandidateListState
}

export const reducers: ActionReducerMap<CandidateFormInterface> = {
    candidateListState: fromReducer.reducer
}

export const effects: any[] = [
    CandidateEffect
]

export const getCandidateState = createFeatureSelector<CandidateFormInterface>('VoteElection')