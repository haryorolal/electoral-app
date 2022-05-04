import { Action } from "@ngrx/store";
import { Result, ResultCreateRequest } from "./electList.model";

export enum Types {
    READ = '[Electoral][Voter] Read: Start',
    READ_SUCCESS = '[Electoral][Voter] ReadSuccess: Success',
    READ_ERROR = '[Electoral][Voter] ReadError: Error',

    CREATE = '[Electoral][Voter] Create: Start',
    CREATE_SUCCESS = '[Electoral][Voter] CreateSuccess: Success',
    CREATE_ERROR = '[Electoral][Voter] CreateError: Error',
}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public result: Result[]) {}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}

export class Create implements Action{
    readonly type = Types.CREATE;
    constructor(public result: ResultCreateRequest){}
}

export class CreateSuccess implements Action{
    readonly type = Types.CREATE_SUCCESS;
    constructor(public result: Result){}
}

export class CreateError implements Action{
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){}
}

export type All 
= Read
| ReadSuccess
| ReadError 
| Create
| CreateSuccess
| CreateError