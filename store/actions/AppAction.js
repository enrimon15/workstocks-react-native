import {LOAD_JOB_BY_ID, LOAD_POPULAR_JOBS, LOAD_RECENT_JOBS, LOAD_SEARCH_JOBS} from "./ActionType";
import HttpApi from "../../util/HttpApi";

export function loadPopularJobs() {
    return function(dispatch, getState) {
        dispatch({
            type: LOAD_POPULAR_JOBS,
            payload: HttpApi.popularJobs()
        })
    };
}

export function loadRecentJobs() {
    return function(dispatch, getState) {
        dispatch({
            type: LOAD_RECENT_JOBS,
            payload: HttpApi.recentJobs()
        })
    };
}

export function loadJobDetails(jobId) {
    return function(dispatch, getState) {
        dispatch({
            type: LOAD_JOB_BY_ID,
            payload: HttpApi.jobById(jobId)
        })
    };
}

export function loadSearchJobs(city) {
    return function(dispatch, getState) {
        dispatch({
            type: LOAD_SEARCH_JOBS,
            payload: HttpApi.searchJobs(city)
        })
    };
}