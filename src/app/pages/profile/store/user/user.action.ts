import { Action } from '@ngrx/store';
import { UserInterface } from './user.models';
import { ActionType } from './actionType';

//Read

export class Read implements Action {
    readonly type = ActionType.READ;
    constructor(public id: string) {       
    }
}

export class ReadSuccess implements Action {
    readonly type = ActionType.READ_SUCCESS;
    constructor(public user: UserInterface) {       
    }
}

export class ReadError implements Action {
    readonly type = ActionType.READ_ERROR;
    constructor(public error: string) {       
    }
}

export class Clear implements Action {
    readonly type = ActionType.CLEAR;
    constructor() {    
    }
}

export type All 
= Read
| ReadSuccess
| ReadError
| Clear;
