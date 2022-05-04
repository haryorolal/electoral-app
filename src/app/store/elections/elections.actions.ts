import { Action } from "@ngrx/store";
import { Elections } from "./elections.models";
import { ElectionsActionTypes } from "./ActionType";

export class Read implements Action {
    readonly type = ElectionsActionTypes.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = ElectionsActionTypes.READ_SUCCESS;
    constructor(public elections: Elections){}
}

export class ReadError implements Action {
    readonly type = ElectionsActionTypes.READ_ERROR;
    constructor(public error: string){}
}

export type All = Read | ReadSuccess | ReadError;