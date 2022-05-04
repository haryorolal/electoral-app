export enum ActionTypes {
    INIT = '[User] Init: Start',
    INIT_AUTHORIZED = '[User] Init: Authorized',
    INIT_UNAUTHORIZED = '[User] Init: Unauthorized',
    INIT_ERROR = '[User] Init: Error',

    SIGN_IN_EMAIL = '[User] Sign In with email: Start',
    SIGN_IN_EMAIL_SUCCESS = '[User] Sign In with email: Success',
    SIGN_IN_EMAIL_ERROR = '[User] Sign In with email: Error',

    SIGN_UP_EMAIL = '[User] Sign Up with email: Start',
    SIGN_UP_EMAIL_SUCCESS = '[User] Sign Up with email: Success',
    SIGN_UP_EMAIL_ERROR = '[User] Sign Up with email: Error',

    SIGN_OUT = '[User] Sign Out: Start',
    SIGN_OUT_SUCCESS = '[User] Sign Out: Success',
    SIGN_OUT_ERROR = '[User] Sign Out: Error',

    CREATE = '[User] Create: Start',
    CREATE_SUCCESS = '[User] Create: Success',
    CREATE_ERROR = '[User] Create: Error',

    UPDATE = '[User] Update: Start',
    UPDATE_SUCCESS = '[User] Update: Success',
    UPDATE_ERROR = '[User] Update: Error',
}