import { createSelector } from "@ngrx/store";
import { listAdaptor } from "./position.reducer";
import { getPositionState, PositionFormState } from "../index";


export const getListPositionState = createSelector(
    getPositionState,
    (state: PositionFormState) => state.positionList
)

export const { selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getListPositionState);

export const selectEntityById = (props: {id: string}) => createSelector(
    selectEntities,
    (entities) => {
        entities[props.id]
    }
)