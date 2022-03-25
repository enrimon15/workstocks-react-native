import {INITIAL_STATE} from "../state/AppState"
import {
    LOAD_JOB_BY_ID_ERROR,
    LOAD_JOB_BY_ID_LOADING,
    LOAD_JOB_BY_ID_SUCCESS,
    LOAD_POPULAR_JOBS_ERROR,
    LOAD_POPULAR_JOBS_LOADING,
    LOAD_POPULAR_JOBS_SUCCESS,
    LOAD_RECENT_JOBS_ERROR,
    LOAD_RECENT_JOBS_LOADING,
    LOAD_RECENT_JOBS_SUCCESS,
    LOAD_SEARCH_JOBS_ERROR, LOAD_SEARCH_JOBS_LOADING,
    LOAD_SEARCH_JOBS_SUCCESS
} from "../actions/ActionType";

export default function AppReducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_POPULAR_JOBS_LOADING:
            return {
                ...state,
                loadingPopularJobs: true,
                errorPopularJobs: false
            };
        case LOAD_POPULAR_JOBS_SUCCESS:
            return {
                ...state,
                popularJobs: action.payload,
                loadingPopularJobs: false,
                errorPopularJobs: false
            };
        case LOAD_POPULAR_JOBS_ERROR:
            return {
                ...state,
                loadingPopularJobs: false,
                errorPopularJobs: true
            };
        case LOAD_RECENT_JOBS_LOADING:
            return {
                ...state,
                loadingRecentJobs: true,
                errorRecentJobs: false
            };
        case LOAD_RECENT_JOBS_SUCCESS:
            return {
                ...state,
                recentJobs: action.payload,
                loadingRecentJobs: false,
                errorRecentJobs: false
            };
        case LOAD_RECENT_JOBS_ERROR:
            return {
                ...state,
                loadingRecentJobs: false,
                errorRecentJobs: true
            };
        case LOAD_JOB_BY_ID_LOADING:
            return {
                ...state,
                loadingJob: true,
                errorJob: false
            };
        case LOAD_JOB_BY_ID_SUCCESS:
            return {
                ...state,
                job: action.payload,
                loadingJob: false,
                errorJob: false
            };
        case LOAD_JOB_BY_ID_ERROR:
            return {
                ...state,
                loadingJob: false,
                errorJob: true
            };
        case LOAD_SEARCH_JOBS_LOADING:
            return {
                ...state,
                loadingSearchJobs: true,
                errorSearchJob: false
            };
        case LOAD_SEARCH_JOBS_SUCCESS:
            return {
                ...state,
                searchJob: action.payload,
                loadingSearchJobs: false,
                errorSearchJob: false
            };
        case LOAD_SEARCH_JOBS_ERROR:
            return {
                ...state,
                loadingSearchJobs: false,
                errorSearchJob: true
            };
        default:
            return state
    }
}