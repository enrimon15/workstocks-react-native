import {combineReducers} from 'redux';
import AppReducers from './AppReducers';
import UserReducers from "./UserReducers";

const rootReducer = combineReducers({
    appReducer : AppReducers,
    userReducer : UserReducers
});

export default rootReducer;