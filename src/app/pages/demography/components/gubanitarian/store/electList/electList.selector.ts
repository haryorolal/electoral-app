import { createSelector } from "@ngrx/store";
import { listAdaptor } from "./electList.reducer";
import { getResultState, ResultFormInterface } from "../index";


export const getResultListState = createSelector(
    getResultState,
    (state: ResultFormInterface) => state.resultListState
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getResultListState);

export const selectEntityById = (props: {id: string}) => createSelector(
    selectEntities,
    (entities) => entities[props.id]
)