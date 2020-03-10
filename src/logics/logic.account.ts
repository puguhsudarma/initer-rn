import { createLogic } from 'redux-logic';
import { IDependencies, ISuccessLoginResponse } from '../types/responseApi';
import {
    LOGIN,
    login,
    LOGOUT,
    logout,
    accountFailed,
    loginSuccess,
    logoutSuccess,
} from '../actions/action.account';
import { IRulesFormValidation, handleFormValidation, handleError } from '../utils/handleLogic';
import toast from '../utils/toast';
import { LOGIN_API } from '../constants/api';

const loginLogic = createLogic({
    type: LOGIN,
    validate({ action }: IDependencies<ReturnType<typeof login>>, allow, reject) {
        const { password, mobile } = action.payload;

        const rules: IRulesFormValidation[] = [
            {
                isValid: mobile !== '',
                message: 'Mobile number is required',
            },
            {
                isValid: Number(mobile) !== NaN,
                message: 'Mobile number must be number',
            },
            {
                isValid: password !== '',
                message: 'Password is required',
            },
        ];

        handleFormValidation(
            rules,
            () => allow(action),
            (rule) => {
                toast(rule.message, 'Attention');

                if (action.payload.onFailed) {
                    action.payload.onFailed();
                }

                reject(accountFailed(rule.message, action.type));
            },
        );
    },
    process({ httpClient, action }: IDependencies<ReturnType<typeof login>>, dispatch, done) {
        httpClient
            .post<ISuccessLoginResponse>(
                LOGIN_API,
                {
                    type: 'customer',
                    identity: action.payload.mobile,
                    password: action.payload.password,
                },
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            )
            .then((response) => {
                if (__DEV__) {
                    console.log(`${action.type}: `, response);
                }

                return response.data;
            })
            .then((response) => {
                dispatch(loginSuccess(response));

                if (action.payload.onSuccess) {
                    action.payload.onSuccess(false);
                }
            })
            .catch((error) => {
                handleError({
                    dispatch,
                    error,
                    failedAction: accountFailed(error, action.type),
                    onFailed: action.payload.onFailed,
                });
            })
            .then(() => done());
    },
});

const logoutLogic = createLogic({
    type: LOGOUT,
    process({ getState }: IDependencies<ReturnType<typeof logout>>, dispatch, done) {
        if (getState().account.isLoggedIn) {
            dispatch(logoutSuccess());
        }
        done();
    },
});

export default [loginLogic, logoutLogic];
