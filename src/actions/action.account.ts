import { IAccessToken } from '../types/account';
import { IError } from '../types/responseApi';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const ACCOUNT_FAILED = 'ACCOUNT_FAILED';

export const login = (
    mobile: string,
    password: string,
    onSuccess?: (isChangePassword: boolean) => void,
    onFailed?: () => void,
) => ({
    type: LOGIN as typeof LOGIN,
    payload: {
        mobile,
        password,
        onSuccess,
        onFailed,
    },
});

export const loginSuccess = (accessToken: IAccessToken) => ({
    type: LOGIN_SUCCESS as typeof LOGIN_SUCCESS,
    payload: {
        accessToken,
    },
});

export const logout = (unAuth?: boolean) => ({
    type: LOGOUT as typeof LOGOUT,
    payload: {
        unAuth,
    },
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS as typeof LOGOUT_SUCCESS,
});

export const accountFailed = (error: any, type: string) => ({
    type: ACCOUNT_FAILED as typeof ACCOUNT_FAILED,
    payload: {
        error: {
            error,
            type,
        } as IError,
    },
});

export type ActionAccountType = ReturnType<
    typeof login | typeof loginSuccess | typeof logout | typeof logoutSuccess | typeof accountFailed
>;
