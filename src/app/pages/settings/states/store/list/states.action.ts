import { Action } from "@ngrx/store";
import { States, StatesCreateRequest } from "./states.model";

export enum Types {
    READ = '[Electoral][States] Read: Start',
    READ_SUCCESS = '[Electoral][States] Read: Success',
    READ_ERROR = '[Electoral][States] Read: Error',

    CREATE = '[Electoral][States] Create: Start',
    CREATE_SUCCESS = '[Electoral][States] Create: Success',
    CREATE_ERROR = '[Electoral][States] Create: Error',

    UPDATE = '[Electoral][States] Update: Start',
    UPDATE_SUCCESS = '[Electoral][States] Update: Success',
    UPDATE_ERROR = '[Electoral][States] Update: Error',

    DELETE = '[Electoral][States] Delete: Start',
    DELETE_SUCCESS = '[Electoral][States] Delete: Success',
    DELETE_ERROR = '[Electoral][States] Delete: Error'
}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public states: States[]){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public states: StatesCreateRequest){}
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public states: States){}
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){}
}

export class Update implements Action {
    readonly type = Types.UPDATE;
    constructor (public states: States){}
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor (public id: string, public changes: Partial<States>){}
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

export type All =
| Read
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