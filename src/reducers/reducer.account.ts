import { IAccountState } from '../types/account';
import { ActionAccountType, LOGIN_SUCCESS, ACCOUNT_FAILED, LOGOUT_SUCCESS } from '../actions/action.account';

const profile = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
};

export const initialState: IAccountState = {
    token_type: 'Bearer',
    expires_in: 0,
    access_token: '',
    refresh_token: '',
    isLoggedIn: false,
    profile,
    error: {},
};

export default (state = initialState, action: ActionAccountType): IAccountState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload.accessToken,
                isLoggedIn: true,
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                ...initialState,
            };

        case ACCOUNT_FAILED:
            return {
                ...state,
                error: action.payload.error,
            };

        default:
            return state;
    }
};
