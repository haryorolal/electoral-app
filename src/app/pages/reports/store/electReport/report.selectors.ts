import { createSelector } from "@ngrx/store";
import { getReportState, ReportFormInterface } from "../index";
import { listAdaptor } from "./report.reducer";

export const  getReportListState = createSelector(
    getReportState,
    (state: ReportFormInterface) => state.reportListState
)

export const {selectIds, selectEntities, selectAll, selectTotal} = listAdaptor.getSelectors(getReportListState)

export const selectEntityById = (props: {id: string}) => createSelector(
    selectEntities,
    (entities) => entities[props.id]
)