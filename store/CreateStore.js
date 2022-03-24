import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// import { composeWithDevTools } from 'redux-devtools-extension';


export default (reducers) => {
    const middelware = [thunk, promise];
    const enhancer = [applyMiddleware(...middelware)];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(...enhancer));
    return {store};
}