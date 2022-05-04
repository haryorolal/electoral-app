import { Action } from "@ngrx/store";
import { LocalCreateRequest, Local } from "./locals.model";

export enum Types {
    READ = '[Electoral][Local Government] Read: Start',
    READ_SUCCESS = '[Electoral][Local Government] Read: Success',
    READ_ERROR = '[Electoral][Local Government] Read: Error',

    CREATE = '[Electoral][Local Government] Create: Start',
    CREATE_SUCCESS = '[Electoral][Local Government] Create: Success',
    CREATE_ERROR = '[Electoral][Local Government] Create: Error',

    UPDATE = '[Electoral][Local Government] Update: Start',
    UPDATE_SUCCESS = '[Electoral][Local Government] Update: Success',
    UPDATE_ERROR = '[Electoral][Local Government] Update: Error',

    DELETE = '[Electoral][Local Government] Delete: Start',
    DELETE_SUCCESS = '[Electoral][Local Government] Delete: Success',
    DELETE_ERROR = '[Electoral][Local Government] Delete: Error',

}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS
    constructor(public local: Local[]){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public local: LocalCreateRequest){}
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public local: Local){}
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){}
}

export class Update implements Action {
    readonly type = Types.UPDATE;
    constructor(public local: Local){}
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor(public id: string, public changes: Partial<Local>){}
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
    constructor(public id:string){}
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