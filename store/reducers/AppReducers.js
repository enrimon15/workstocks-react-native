import {INITIAL_STATE} from "../state/AppState"
import {LOAD_RECENT_JOBS} from "../actions/ActionType";

function sApp(state) { return state.app; }
export function sAppRecentJobs(state) { return sApp(state).recentJobs; }
export function sAppRecentJobs(state) { return sApp(state).recentJobs; }
export function sAppPopularJobs(state) { return sApp(state).popularJobs; }

export default function AppReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_RECENT_JOBS:
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