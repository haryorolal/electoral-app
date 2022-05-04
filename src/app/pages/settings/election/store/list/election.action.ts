import { Action } from "@ngrx/store";
import { ElectionCreateRequest, Election } from "./election.model";

export enum Types{
    READ = '[Electoral][Election] Read: Start',
    READ_SUCCESS = '[Electoral][Election] Read: Success',
    READ_ERROR = '[Electoral][Election] Read: Error',

    CREATE = '[Electoral][Election] Create: Start',
    CREATE_SUCCESS = '[Electoral][Election] Create: Success',
    CREATE_ERROR = '[Electoral][Election] Create: Error',

    UPDATE = '[Electoral][Election] Update: Start',
    UPDATE_SUCCESS = '[Electoral][Election] Update: Success',
    UPDATE_ERROR = '[Electoral][Election] Update: Error',

    DELETE = '[Electoral][Election] Delete: Start',
    DELETE_SUCCESS = '[Electoral][Election] Delete: Success',
    DELETE_ERROR = '[Electoral][Election] Delete: Error',
}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public election: Election[]){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string){}
}

//Create

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public election: ElectionCreateRequest){}
}

export class CreateSuccess implements Action {
    readonly type = Types.CREATE_SUCCESS;
    constructor(public election: Election){}
}

export class CreateError implements Action {
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){}
}

//Update
export class Update implements Action {
    readonly type = Types.UPDATE;
    constructor(public election: Election){}
}

export class UpdateSuccess implements Action {
    readonly type = Types.UPDATE_SUCCESS;
    constructor(public id: string, public changes: Partial<Election>){}
}

export class UpdateError implements Action {
    readonly type = Types.UPDATE_ERROR;
    constructor(public error: string){}
}

//Delete

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