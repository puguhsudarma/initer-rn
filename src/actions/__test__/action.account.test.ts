import { login } from '../action.account';

describe('Actions account', () => {
    it('should create an action to login', () => {
        const mobile = '089554874';
        const password = 'secret';
        const onSuccess = jest.fn();
        const onFailed = jest.fn();

        const expectedAction: ReturnType<typeof login> = {
            type: 'LOGIN',
            payload: {
                mobile,
                password,
                onSuccess,
                onFailed,
            },
        };

        expect(login(mobile, password, onSuccess, onFailed)).toEqual(expectedAction);
    });
});
