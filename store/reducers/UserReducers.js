import {INITIAL_STATE} from "../state/UserState";
import {
    CLEAN_ERROR,
    USER_ERROR,
    USER_LOADING,
    USER_LOGOUT,
    USER_SUCCESS,
    USER_UPDATE_SUCCESS
} from "../actions/ActionType";

export default function UserReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }
        case USER_SUCCESS:
            return {
                ...state,
                user: action.payload.data,
                loading: false,
                error: false,
            };
        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case USER_LOGOUT:
            return {
                ...state,
                user: {},
                error: false,
                loading: false
            };
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                },
                loading: false,
                error: false,
            };
        case CLEAN_ERROR:
            return {
                ...state,
                error: false
            };
        default:
            return state
    }
}