import { IProfile } from './account';
import { IError } from './responseApi';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const ACCOUNT_FAILED = 'ACCOUNT_FAILED';

export interface ILoginBody {
    email: string;
    password: string;
}

export interface ILogin {
    type: typeof LOGIN;
    payload: {
        body: ILoginBody;
        onSuccess?: () => void;
        onFailed?: () => void;
    };
}

export interface ILoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: {
        access_token: string;
        profile: IProfile;
    };
}

export interface IAccountFailed {
    type: typeof ACCOUNT_FAILED;
    payload: {
        error: IError;
    };
}

export type ActionAccountType = ILogin | ILoginSuccess | IAccountFailed;
