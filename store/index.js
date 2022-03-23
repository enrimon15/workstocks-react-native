import configureStore from './CreateStore';
import rootReducer from "./reducers";

export default function() {
    return configureStore(rootReducer);
}