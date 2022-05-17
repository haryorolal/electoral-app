import { Action } from "@ngrx/store";
import { PositionCreateRequest, Position } from "./position.model";

export enum Types {
    READ = '[Electoral][Position] Read: Start',
    READ_SUCCESS = '[Electoral][Position] Read: Success',
    READ_ERROR = '[Electoral][Position] Read: Error',

    CREATE = '[Electoral][Position] Create: Start',
    CREATE_SUCCESS = '[Electoral][Position] Create: Success',
    CREATE_ERROR = '[Electoral][Position] Create: Error',

    UPDATE = '[Electoral][Position] Update: Start',
    UPDATE_SUCCESS = '[Electoral][Position] Update: Success',
    UPDATE_ERROR = '[Electoral][Position] Update: Error',

    DELETE = '[Electoral][Position] Start: Delete',
    DELETE_SUCCESS = '[Electoral][Position] Delete: Success',
    DELETE_ERROR = '[Electoral][Position] Delete: Error'
}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public positon: Position[]){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public position: PositionCreateRequest){}
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public positon: Position){}
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){}
}

export class Update implements Action {
    readonly type = Types.UPDATE;
    constructor(public position: Position){}
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor(public id: string, public changes: Partial<Position>){}
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
| DeleteError;

