import { IAccountState } from '../types/account';
import { ActionAccountType, LOGIN_SUCCESS, ACCOUNT_FAILED } from '../types/action.account';

export const initialState: IAccountState = {
    access_token: '',
    profile: {},
    isLoggedIn: false,
    error: {},
};

export default (state = initialState, action: ActionAccountType): IAccountState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                access_token: action.payload.access_token,
                profile: {
                    ...state.profile,
                    ...action.payload.profile,
                },
                isLoggedIn: true,
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
