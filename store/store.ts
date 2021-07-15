import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer';

const middleware = [thunk];

const persistConfig = {
    key: 'jenjen',
    storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(
    persistedReducer,
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'dev'
        ? composeWithDevTools(applyMiddleware(...middleware))
        : applyMiddleware(...middleware),
);

export const persistor = persistStore(store);

export default store;
