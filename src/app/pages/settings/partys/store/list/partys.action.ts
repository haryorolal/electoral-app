import { Action } from "@ngrx/store";
import { Party, PartyCreateRequest } from "./partys.model";

export enum Types {
    READ = '[Electoral][Party] Read: Start',
    READ_SUCCESS = '[Electoral][Party] Read: Success',
    READ_ERROR = '[Electoral][Party] Read: Error',

    CREATE = '[Electoral][Party] Create: Start',
    CREATE_SUCCESS = '[Electoral][Party] Create: Success',
    CREATE_ERROR = '[Electoral][Party] Create: Error',

    UPDATE = '[Electoral][Party] Update: Start',
    UPDATE_SUCCESS = '[Electoral][Party] Update: Success',
    UPDATE_ERROR = '[Electoral][Party] Update: Error',

    DELETE = '[Electoral][Party] Delete: Start',
    DELETE_SUCCESS = '[Electoral][Party] Delete: Success',
    DELETE_ERROR = '[Electoral][Party] Delete: Error',
}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public party: Party[]){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public party: PartyCreateRequest){}
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public party: Party){}
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){}
}

export class Update implements Action {
    readonly type = Types.UPDATE;
    constructor (public party: Party){}
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor (public id: string, public changes: Partial<Party>){}
}

export class UpdateError implements Action {
    readonly type = Types.UPDATE_ERROR;
    constructor(public error: string){}
}

export class Delete implements Action {
    readonly type = Types.DELETE;
    constructor(public id: string){}
}

export class DeleteSuccess implements Action{
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