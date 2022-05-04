import { Action, createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionType";
import { EmailPasswordCredentials, UserInterface, UserCreateRequest } from "./user.model";



export class InitAction implements Action {
    readonly type = ActionTypes.INIT;
    constructor(){}
}

export class InitAuthorizedAction implements Action {
    readonly type = ActionTypes.INIT_AUTHORIZED;
    constructor(public uid: string, public user: UserInterface){}
}

export class InitUnAuthorizedAction implements Action {
    readonly type = ActionTypes.INIT_UNAUTHORIZED;
    constructor(){}
}

export class InitErrorAction implements Action {
    readonly type = ActionTypes.INIT_ERROR;
    constructor(public error: string) {}
}

export class SigninAction implements Action {
    readonly type = ActionTypes.SIGN_IN_EMAIL;
    constructor(public credentials: EmailPasswordCredentials){}
}

export class SigninActionSuccess implements Action {
    readonly type = ActionTypes.SIGN_IN_EMAIL_SUCCESS;
    constructor(public uid: string, public user: UserInterface){}
}

export class SigninActionError implements Action {
    readonly type = ActionTypes.SIGN_IN_EMAIL_ERROR;
    constructor(public error: string){}
}

export class SignupAction implements Action {
    readonly type = ActionTypes.SIGN_UP_EMAIL;
    constructor(public credentials: EmailPasswordCredentials){}
}

export class SignupActionSuccess implements Action {
    readonly type = ActionTypes.SIGN_UP_EMAIL_SUCCESS;
    constructor(public uid: string){}
}

export class SingupActionError implements Action {
    readonly type = ActionTypes.SIGN_UP_EMAIL_ERROR;
    constructor(public error: string){}
}

export class SignoutAction implements Action {
    readonly type = ActionTypes.SIGN_OUT;
    constructor(){}
}

export class SignoutSuccessAction implements Action {
    readonly type = ActionTypes.SIGN_OUT_SUCCESS;
    constructor(){}
}

export class SignoutActionError implements Action {
    readonly type = ActionTypes.SIGN_OUT_ERROR;
    constructor(public error: string){}
}

export class Create implements Action {
    readonly type = ActionTypes.CREATE;
    constructor(public user: UserCreateRequest){}
}

export class CreateSuccess implements Action{
    readonly type = ActionTypes.CREATE_SUCCESS;
    constructor(public user: UserInterface){}
}

export class CreateError implements Action{
    readonly type = ActionTypes.CREATE_ERROR;
    constructor(public error: string){}
}

export class Update implements Action {
    readonly type = ActionTypes.UPDATE;
    constructor(public user: UserInterface){}
}

export class UpdateSuccess implements Action {
    readonly type = ActionTypes.UPDATE_SUCCESS;
    constructor(public user: UserInterface){}
}

export class UpdateError implements Action {
    readonly type = ActionTypes.UPDATE_ERROR;
    constructor(public error: string){}
}

export type All 
= InitAction
    | InitAuthorizedAction
    | InitUnAuthorizedAction
    | InitErrorAction
    | SigninAction
    | SigninActionSuccess
    | SigninActionError
    | SignupAction
    | SignupActionSuccess
    | SingupActionError
    | SignoutAction
    | SignoutSuccessAction
    | SignoutActionError
    | Create
    | CreateSuccess
    | CreateError
    | Update
    | UpdateSuccess
    | UpdateError


