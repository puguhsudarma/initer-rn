import { createLogic } from 'redux-logic';
import { IDependencies } from '../types/responseApi';
import { LOGIN, ILogin } from '../types/action.account';

const loginLogic = createLogic({
    type: LOGIN,
    validate({ action }: { action: ILogin }, allow, reject) {},
    process({ httpClient, action }: IDependencies & { action: ILogin }, dispatch, done) {},
});

export default [loginLogic];
