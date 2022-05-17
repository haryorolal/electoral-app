import { createSelector, createFeatureSelector } from "@ngrx/store";
import { ElectionsState } from "./elections.reducer";

export const getElectionsState = createFeatureSelector<ElectionsState>('elections');

export const getElectionList = createSelector(
    getElectionsState,
    (state) => state.entities
)

export const getLoading = createSelector(
    getElectionsState,
    (state) => state.loading
)

export const getIsReady = createSelector(
    getElectionsState,
    (state) => state.entities && !state.loading
)

export const getConstitution = createSelector(
    getElectionList,
    (state) => state.constitution
)

export const getElection = createSelector(
    getElectionList,
    (state) => state.election
)

export const getLocalGovernment = createSelector(
    getElectionList,
    (state) => state.localgovernment
)

export const getParties = createSelector(
    getElectionList,
    (state) => state.parties
)

export const getState = createSelector(
    getElectionList,
    (state) => state.state
)

export const getResult = createSelector(
    getElectionList,
    (state) => state.result
)

export const getCandidate = createSelector(
    getElectionList,
    (state) => state.candidate
)

export const getPositions = createSelector(
    getElectionList,
    (state) => state.positions
)
