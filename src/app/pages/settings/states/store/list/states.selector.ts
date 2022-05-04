import { createSelector } from "@ngrx/store";
import { statesFormState, getStatesState } from "../index";
import { listAdaptor } from "./states.reducer";

export const getListStatesState = createSelector(
    getStatesState,
    (state: statesFormState) => state.statesList
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getListStatesState);

export const selectEntityById = (props: {id: string}) => createSelector(
    selectEntities,
    (entities) => {
        entities[props.id]
    }
)