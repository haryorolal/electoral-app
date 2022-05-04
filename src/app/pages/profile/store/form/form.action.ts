import { Action } from "@ngrx/store";
import { ProfileFormInterface } from "./form.model";
import { ActionType } from "./actionType";

export class Set implements Action {
    readonly type = ActionType.SET;
    constructor(public form: ProfileFormInterface){}
}

export class Update implements Action {
    readonly type = ActionType.UPDATE;
    constructor(public changes: Partial<ProfileFormInterface>){}
}

export class Clear implements Action {
    readonly type = ActionType.CLEAR;
    constructor(){}
}

export type All
= Set
| Update
| Clear