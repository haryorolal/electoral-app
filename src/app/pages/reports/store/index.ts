import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import {ReportEffect} from './electReport/report.effects';
import * as fromReducer from './electReport/report.reducer';

export interface ReportFormInterface {
    reportListState: fromReducer.ReportListtState
}

export const reducers: ActionReducerMap<ReportFormInterface> = {
    reportListState: fromReducer.reducer
}

export const effects: any[] = [
    ReportEffect
]

export const getReportState = createFeatureSelector<ReportFormInterface>('report')