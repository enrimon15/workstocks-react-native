import {combineReducers} from 'redux';
import AppReducers from './AppReducers';
import UserReducers from "./UserReducers";

const rootReducer = combineReducers({
    app: AppReducers,
    user: UserReducers
});

export default rootReducer;