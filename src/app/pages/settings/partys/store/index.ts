import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromPartyReducer from './list/partys.reducer';
import { PartyEffects } from "./list/partys.effect";

export class PartyFormState {
    partyList: fromPartyReducer.PartyListState
}

export const reducers: ActionReducerMap<PartyFormState> = {
    partyList: fromPartyReducer.reducer
}

export const effects: any[] = [
    PartyEffects
]

export const getPartyState = createFeatureSelector<PartyFormState>('party')
