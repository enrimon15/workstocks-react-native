import {INITIAL_STATE} from "../state/AppState";

export default function AppReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOAD_RECENT_JOBS':
            return {
                ...state,
                recentJobs: action.payload,
                loadingRecentJobs: false
            }
        case 'LOAD_POPULAR:JOBS':
            return {
                ...state,
                popularJobs: action.payload,
                loadingPopularJobs: false
            };
        default:
            return state
    }
}