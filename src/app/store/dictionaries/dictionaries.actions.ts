import { Action } from "@ngrx/store";
import { Dictionaries } from "./dictionaries.models";
import { DictionaryActionTypes } from "./ActionType";

export class Read implements Action {
    readonly type = DictionaryActionTypes.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = DictionaryActionTypes.READ_SUCCESS;
    constructor(public dictionaries: Dictionaries){}
}

export class ReadError implements Action {
    readonly type = DictionaryActionTypes.READ_ERROR;
    constructor(public error: string){}
}

export type All = Read | ReadSuccess | ReadError;