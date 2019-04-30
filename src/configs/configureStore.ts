import axios from 'axios';
import { createStore, applyMiddleware, Middleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogicMiddleware } from 'redux-logic';
import { createLogger } from 'redux-logger';
import { persistReducer, PersistConfig } from 'redux-persist';
import rootReducer from '../reducers';
import logic from '../logics';

const dependencies = {
    httpClient: axios,
};
const logicMiddleware = createLogicMiddleware(logic, dependencies);
const middlewares: Middleware[] = [logicMiddleware];

if (__DEV__) {
    middlewares.push(createLogger());
}

const persistConfig: PersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    return createStore(persistedReducer, applyMiddleware(...middlewares));
};
