import { Action } from "@ngrx/store";
import { CandidateResultCreateRequest, CandidateResult } from "./candidate.model";

export enum Types {
    READ = '[Electoral][CreateElection] Read: Start',
    READ_SUCCESS = '[Electoral][CreateElection] Read: Success',
    READ_ERROR = '[Electoral][CreateElection] Read: Error',

    CREATE = '[Electoral][CreateElection] Create: Start',
    CREATE_SUCCESS = '[Electoral][CreateElection] Create: Success',
    CREATE_ERROR = '[Electoral][CreateElection] Create: Error',

    UPDATE = '[Electoral][CreateElection] Update: Start',
    UPDATE_SUCCESS = '[Electoral][CreateElection] Update: Success',
    UPDATE_ERROR = '[Electoral][CreateElection] Update: Error',

    DELETE = '[Electoral][CreateElection] Delete: Start',
    DELETE_SUCCESS = '[Electoral][CreateElection] Delete: Success',
    DELETE_ERROR = '[Electoral][CreateElection] Delete: Error'
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

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public candidate: CandidateResultCreateRequest){}
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public candidate: CandidateResult){}
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
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

export class Delete implements Action {
    readonly type = Types.DELETE;
    constructor(public id: string){}
}

export class DeleteSuccess implements Action {
    readonly type = Types.DELETE_SUCCESS;
    constructor(public id: string){}
}

export class DeleteError implements Action {
    readonly type = Types.DELETE_ERROR;
    constructor(public error: string){}
}

export type All 
= Read 
| ReadSuccess
| ReadError
| Create
| CreateSuccess
| CreateError
| Update
| UpdateSuccess
| UpdateError
| Delete
| DeleteSuccess
| DeleteError