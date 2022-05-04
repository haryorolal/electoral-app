import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromElection from './list/election.reducer';
import { ElectionEffects } from "./list/election.effect";

export interface ElectionFormState {
    electionList: fromElection.electionListState
}

export const reducers: ActionReducerMap<ElectionFormState> = {
    electionList: fromElection.reducer
}

export const effects: any[] = [
    ElectionEffects
]

export const getElectionState = createFeatureSelector<ElectionFormState>('election')