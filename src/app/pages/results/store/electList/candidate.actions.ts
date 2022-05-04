import { Action } from "@ngrx/store";
import { CandidateCreateRequest, Candidate } from "./candidate.model";

export enum Types {
    READ = '[Electoral][Results] Read: Start',
    READ_SUCCESS = '[Electoral][Results] ReadSuccess: Success',
    READ_ERROR = '[Electoral][Results] ReadError: Error',
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