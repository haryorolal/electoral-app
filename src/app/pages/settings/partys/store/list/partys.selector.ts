import { createSelector } from "@ngrx/store";
import { PartyFormState, getPartyState } from "../index";
import { listAdaptor } from "./partys.reducer";

export const getListPartyState = createSelector(
    getPartyState,
    (state: PartyFormState) => state.partyList
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getListPartyState);

export const selectEntityById = (props: {id: string}) => createSelector(
    selectEntities, 
    (entities) => {
        entities[props.id]
    }
)