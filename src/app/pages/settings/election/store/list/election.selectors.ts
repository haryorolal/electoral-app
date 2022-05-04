import { createSelector } from "@ngrx/store";
import { ElectionFormState, getElectionState } from "../index";
import { listAdaptor } from "./election.reducer";

export const getListElectionState = createSelector(
    getElectionState,
    (state: ElectionFormState) => state.electionList
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getListElectionState)

export const selectEntityById = (props: {id:string}) => createSelector(
    selectEntities,
    (entities) => {
        return entities[props.id]
    }
)