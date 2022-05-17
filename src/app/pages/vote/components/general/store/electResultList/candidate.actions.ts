import { Action } from "@ngrx/store";
import { CandidateResultCreateRequest, CandidateResult } from "./candidate.model";

export enum Types {
    READ = '[Electoral][VoteCandidate] Read: Start',
    READ_SUCCESS = '[Electoral][VoteCandidate] ReadSuccess: Success',
    READ_ERROR = '[Electoral][VoteCandidate] ReadError: Error',

    UPDATE = '[Electoral][VoteCandidate] Update: Start',
    UPDATE_SUCCESS = '[Electoral][VoteCandidate] UpdateSuccess: Success',
    UPDATE_ERROR = '[Electoral][VoteCandidate] UpdateError: Error',

}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public candidate: CandidateResult[]){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}

export class Update implements Action{
    readonly type = Types.UPDATE;
    constructor(public candidate: CandidateResult){}
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor(public id: string, public changes: Partial<CandidateResult>){}
}

export class UpdateError implements Action {
    readonly type = Types.UPDATE_ERROR;
    constructor(public error: string){}
}


export type All 
= Read 
| ReadSuccess
| ReadError
| Update
| UpdateSuccess
| UpdateError