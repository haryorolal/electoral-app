import { Action } from "@ngrx/store";
import { Constitution, ConstitutionCreateRequest } from "./constitution.model";

export enum Types{
    READ = '[Electoral][Constitution] Read: Start',
    READ_SUCCESS = '[Electoral][Constitution] Read: Success',
    READ_ERROR = '[Electoral][Constitution] Read: Error',

    CREATE = '[Electoral][Constitution] Create: Start',
    CREATE_SUCCESS = '[Electoral][Constitution] Create: Success',
    CREATE_ERROR = '[Electoral][Constitution] Create: Error',

    UPDATE = '[Electoral][Constitution] Update: Start',
    UPDATE_SUCCESS = '[Electoral][Constitution] Update: Success',
    UPDATE_ERROR = '[Electoral][Constitution] Update: Error',

    DELETE = '[Electoral][Constitution] Delete: Start',
    DELETE_SUCCESS = '[Electoral][Constitution] Delete: Success',
    DELETE_ERROR = '[Electoral][Constitution] Delete: Error',

}

export class Read implements Action {
    readonly type = Types.READ;
    constructor(){}
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCESS;
    constructor(public constitution: Constitution[] ){}
}

export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string ){}
}

//Create

export class Create implements Action {
    readonly type = Types.CREATE;
    constructor(public constitution: ConstitutionCreateRequest){}
}

export class CreateSuccess implements Action{
    readonly type = Types.CREATE_SUCCESS;
    constructor(public constitution: Constitution){} 
}

export class CreateError implements Action{
    readonly type = Types.CREATE_ERROR;
    constructor(public error: string){} 
}

//Update

export class Update implements Action {
    readonly type = Types.UPDATE;
    constructor(public constitution: Constitution){}
}

export class UpdateSuccess implements Action{
    readonly type = Types.UPDATE_SUCCESS;
    constructor(public id: string, public changes: Partial<Constitution>){} 
}

export class UpdateError implements Action{
    readonly type = Types.UPDATE_ERROR;
    constructor(public error: string){} 
}

//Delete

export class Delete implements Action {
    readonly type = Types.DELETE;
    constructor(public id: string){}
}

export class DeleteSuccess implements Action{
    readonly type = Types.DELETE_SUCCESS;
    constructor(public id: string){} 
}

export class DeleteError implements Action{
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
