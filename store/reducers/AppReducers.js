import {INITIAL_STATE} from "../state/AppState"
import {
    LOAD_POPULAR_JOBS,
    LOAD_RECENT_JOBS
} from "../actions/ActionType";

export default function AppReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case `${LOAD_POPULAR_JOBS}_PENDING`:
            return {
                ...state,
                loadingPopularJobs: true,
                errorPopularJobs: false
            };
        case `${LOAD_POPULAR_JOBS}_FULFILLED`:
            return {
                ...state,
                popularJobs: action.payload.data,
                loadingPopularJobs: false,
                errorPopularJobs: false
            };
        case `${LOAD_POPULAR_JOBS}_REJECTED`:
            return {
                ...state,
                loadingPopularJobs: false,
                errorPopularJobs: true
            };
        case `${LOAD_RECENT_JOBS}_PENDING`:
            return {
                ...state,
                loadingRecentJobs: true,
                errorRecentJobs: false
            };
        case `${LOAD_RECENT_JOBS}_FULFILLED`:
            return {
                ...state,
                recentJobs: action.payload.data,
                loadingRecentJobs: false,
                errorRecentJobs: false
            };
        case `${LOAD_RECENT_JOBS}_REJECTED`:
            return {
                ...state,
                loadingRecentJobs: false,
                errorRecentJobs: true
            };
        default:
            return state
    }
}