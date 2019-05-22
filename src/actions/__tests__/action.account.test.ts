import * as jest from 'jest';
import * as actions from '../action.account';
import * as types from '../../types/action.account';

describe('Account actions', () => {
    it('should create an action to login', () => {
        const email = 'test@test.com';
        const password = 'secret';
        const callbackSuccess = jest.fn();
        const callbackFailed = jest.fn();

        const expectedAction: types.ActionAccountType = {
            type: types.LOGIN,
            payload: {
                body: { email, password },
                onSuccess: callbackSuccess,
                onFailed: callbackFailed,
            },
        };

        expect(actions.login(email, password, callbackSuccess, callbackFailed)).toEqual(expectedAction);
    });
});
