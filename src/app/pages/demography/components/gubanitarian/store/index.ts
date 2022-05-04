
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ResultEffects } from './electList';
import * as fromReducer from './electList/electList.reducer';

export interface ResultFormInterface {
    resultListState: fromReducer.ResultListState
}

export const reducers: ActionReducerMap<ResultFormInterface> = {
    resultListState: fromReducer.reducer
}

export const effects: any[] = [
    ResultEffects
]

export const getResultState = createFeatureSelector<ResultFormInterface>('Gubanitarianresults')