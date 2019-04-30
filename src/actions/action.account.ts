import { IProfile } from '../types/account';
import { LOGIN, LOGIN_SUCCESS, ACCOUNT_FAILED, ActionAccountType } from '../types/action.account';

export const login = (
    email: string,
    password: string,
    onSuccess?: () => void,
    onFailed?: () => void,
): ActionAccountType => ({
    type: LOGIN,
    payload: {
        body: {
            email,
            password,
        },
        onSuccess,
        onFailed,
    },
});

export const loginSuccess = (access_token: string, profile: IProfile): ActionAccountType => ({
    type: LOGIN_SUCCESS,
    payload: {
        access_token,
        profile,
    },
});

export const accountFailed = (error: any, type: string): ActionAccountType => ({
    type: ACCOUNT_FAILED,
    payload: {
        error: {
            error,
            type,
        },
    },
});
