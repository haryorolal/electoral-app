import { createSelector } from "@ngrx/store";
import { getConstitutionState, ConstitutionFormState } from "../index";

import { listAdaptor } from "./constitution.reducer";

export const getListConstitutionState = createSelector(
    getConstitutionState,
    (state: ConstitutionFormState) => state.constitutionlist
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getListConstitutionState);

/*export const selectEntityById = createSelector(
    selectEntities,
    (entities, props:{id:string}) => {
        return entities[props.id]
    }
)*/
export const selectEntityById = (props:{id:string}) => createSelector(
    selectEntities,
    (entities) => {
        return entities[props.id]
    }
)