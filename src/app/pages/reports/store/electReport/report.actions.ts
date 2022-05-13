import { Action } from "@ngrx/store";
import { CandidateCreateRequest, Candidate } from "./report.model";

export enum Types {
    READ = '[Electoral][Report] Read: Start',
    READ_SUCCESS = '[Electoral][Report] ReadSuccess: Success',
    READ_ERROR = '[Electoral][Report] ReadError: Error',
}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public candidate: Candidate[]){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}


export type All 
= Read 
| ReadSuccess
| ReadError