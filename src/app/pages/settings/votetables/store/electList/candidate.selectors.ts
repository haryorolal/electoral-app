import { createSelector } from "@ngrx/store";
import { getCandidateState, CandidateFormInterface } from "../index";
import { listAdaptor } from "./candidate.reducer";

export const  getCandidateListState = createSelector(
    getCandidateState,
    (state: CandidateFormInterface) => state.candidateListState
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getCandidateListState)

export const selectEntityById = (props: {id: string}) => createSelector(
    selectEntities,
    (entities) => entities[props.id]
)