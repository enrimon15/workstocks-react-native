import {INITIAL_STATE} from "../state/AppState"
import {
    ADD_APPLICATION_ERROR,
    ADD_APPLICATION_LOADING,
    ADD_APPLICATION_SUCCESS,
    ADD_FAVORITE,
    ADD_FAVORITE_ERROR,
    ADD_FAVORITE_LOADING,
    ADD_FAVORITE_SUCCESS,
    APPLICATION_ERROR,
    CLEAN_APPLICATION_ERROR,
    CLEAN_ERROR,
    CLEAN_FAVORITE_ERROR,
    FAVORITE_ERROR, GET_APPLICATION_ERROR,
    GET_APPLICATION_LOADING, GET_APPLICATION_SUCCESS,
    GET_FAVORITE_ERROR,
    GET_FAVORITE_LOADING,
    GET_FAVORITE_SUCCESS, INIT_APP,
    LOAD_JOB_BY_ID_ERROR,
    LOAD_JOB_BY_ID_LOADING,
    LOAD_JOB_BY_ID_SUCCESS,
    LOAD_POPULAR_JOBS_ERROR,
    LOAD_POPULAR_JOBS_LOADING,
    LOAD_POPULAR_JOBS_SUCCESS,
    LOAD_RECENT_JOBS_ERROR,
    LOAD_RECENT_JOBS_LOADING,
    LOAD_RECENT_JOBS_SUCCESS,
    REMOVE_APPLICATION_SUCCESS,
    REMOVE_FAVORITE_SUCCESS,
    SEARCH_JOBS_ERROR,
    SEARCH_JOBS_LOADING,
    SEARCH_JOBS_SUCCESS
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
        case SEARCH_JOBS_LOADING:
            return {
                ...state,
                loadingSearchJobs: true,
                errorSearchJobs: false
            };
        case SEARCH_JOBS_SUCCESS:
            return {
                ...state,
                searchJob: action.payload,
                loadingSearchJobs: false,
                errorSearchJobs: false
            };
        case SEARCH_JOBS_ERROR:
            return {
                ...state,
                loadingSearchJobs: false,
                errorSearchJobs: true
            };
        // PREFERITI
        case ADD_FAVORITE_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        isFavorite: true
                    }
                },
                errorFavorites: false
            };
        case REMOVE_FAVORITE_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        isFavorite: false
                    }
                },
                errorFavorites: false
            };
        case GET_FAVORITE_LOADING: {
            return {
                ...state,
                loadingFavorites: true,
                errorFavorites: false
            }
        }
        case GET_FAVORITE_SUCCESS: {
            return {
                ...state,
                favorites: action.payload,
                errorFavorites: false,
                loadingFavorites: false
            }
        }
        case FAVORITE_ERROR: {
            return {
                ...state,
                errorFavorites: true,
                loadingFavorites: false
            }
        }
        // CANDIDATURE
        case ADD_APPLICATION_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        isApplicated: true
                    }
                },
                errorApplications: false
            };
        case REMOVE_APPLICATION_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        isApplicated: false
                    }
                },
                errorApplications: false
            };
        case GET_APPLICATION_LOADING: {
            return {
                ...state,
                loadingApplications: true,
                errorApplications: false
            }
        }
        case GET_APPLICATION_SUCCESS: {
            return {
                ...state,
                applications: action.payload,
                loadingApplications: false,
                errorApplications: false
            }
        }
        case APPLICATION_ERROR: {
            return {
                ...state,
                loadingApplications: false,
                errorApplications: true
            }
        }
        // ERROR
        case CLEAN_ERROR:
            return {
                ...state,
                errorApplications: false,
                errorFavorites: false,
                errorJob: false,
                errorSearchJobs: false,
                errorPopularJobs: false,
                errorRecentJobs: false
            };
        // REINIT
        case INIT_APP:
            return INITIAL_STATE;
        default:
            return state
    }
}