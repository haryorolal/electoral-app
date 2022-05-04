import { createSelector } from "@ngrx/store";
import { LocalFormState, getLocalState } from "../index";
import { listAdaptor } from "./locals.reducer";

export const getListLocalState = createSelector(
    getLocalState,
    (state: LocalFormState) => state.localList
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getListLocalState)

export const selectEntityById = (props: {id:string}) => createSelector(
    selectEntities,
    (entities) => {
        entities[props.id]
    }
)