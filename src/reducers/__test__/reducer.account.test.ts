import account, { initialState } from '../reducer.account';
import { ACCOUNT_FAILED } from '../../types/action.account';

describe('Reducer: Account', () => {
    it('return state', () => {
        const newState = account(initialState, {
            type: ACCOUNT_FAILED,
            payload: { error: { error: '', type: '' } },
        });
        expect(newState).toEqual({
            ...initialState,
            error: { error: '', type: '' },
        });
    });
});
