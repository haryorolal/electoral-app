import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormState } from "./form.reducer";
import { getProfileState, ProfileState } from "../index";



export const getFormState = createSelector(
    getProfileState,
    (state: ProfileState) => state.form
)

export const gerPersonalForm = createSelector(
    getFormState,
    (state: FormState) => !!state.personal && state.personal
)

export const getPersonal2Form = createSelector(
    getFormState,
    (state: FormState) => !!state.personal2 && state.personal2
)