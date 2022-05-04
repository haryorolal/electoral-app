import { Action } from "@ngrx/store";
import { CandidateCreateRequest, Candidate } from "./candidate.model";

export enum Types {
    READ = '[Electoral][Candidate] Read: Start',
    READ_SUCCESS = '[Electoral][Candidate] ReadSuccess: Success',
    READ_ERROR = '[Electoral][Candidate] ReadError: Error',

    CREATE = '[Electoral][Candidate] Create: Start',
    CREATE_SUCCESS = '[Electoral][Candidate] CreateSuccess: Success',
    CREATE_ERROR = '[Electoral][Candidate] CreateError: Error',

    UPDATE = '[Electoral][Candidate] Update: Start',
    UPDATE_SUCCESS = '[Electoral][Candidate] UpdateSuccess: Success',
    UPDATE_ERROR = '[Electoral][Candidate] UpdateError: Error',

    DELETE = '[Electoral][Candidate] Delete: Start',
    DELETE_SUCCESS = '[Electoral][Candidate] DeleteSuccess: Start',
    DELETE_ERROR = '[Electoral][Candidate] DeleteError: Start'
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

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public candidate: CandidateCreateRequest){}
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public candidate: Candidate){}
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){}
}

export class Update implements Action{
    readonly type = Types.UPDATE;
    constructor(public candidate: Candidate){}
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor(public id: string, public changes: Partial<Candidate>){}
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