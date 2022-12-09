import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
// persist storage
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['count']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// logger simpan paling kanan
const middleware = applyMiddleware(promiseMiddleware, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export {
    store,
    persistor
};