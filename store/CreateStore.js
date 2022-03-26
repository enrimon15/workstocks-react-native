import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from "redux-persist";
// import { composeWithDevTools } from 'redux-devtools-extension';


export default (reducers) => {
    const middelware = [thunk, promise];
    const enhancer = [applyMiddleware(...middelware)];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['user'] // solo lo stato user diventa persistente
    };
    const persistedReducer = persistReducer(persistConfig, reducers);

    const store = createStore(persistedReducer, composeEnhancers(...enhancer));

    const persistor = persistStore(store);

    return {store, persistor};
}