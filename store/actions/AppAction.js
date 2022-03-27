import {
    ADD_APPLICATION,
    ADD_APPLICATION_SUCCESS,
    ADD_FAVORITE,
    ADD_FAVORITE_SUCCESS,
    APPLICATION_ERROR,
    CLEAN_ERROR,
    CLEAN_FAVORITE_ERROR,
    FAVORITE_ERROR, GET_APPLICATION, GET_FAVORITE,
    LOAD_JOB_BY_ID,
    LOAD_JOB_BY_ID_ERROR,
    LOAD_JOB_BY_ID_LOADING,
    LOAD_JOB_BY_ID_SUCCESS,
    LOAD_POPULAR_JOBS,
    LOAD_RECENT_JOBS,
    LOAD_RECENT_JOBS_SUCCESS,
    REMOVE_APPLICATION,
    REMOVE_APPLICATION_SUCCESS,
    REMOVE_FAVORITE,
    REMOVE_FAVORITE_SUCCESS,
    SEARCH_JOBS,
    USER_ERROR,
    USER_LOADING,
    USER_SUCCESS
} from "./ActionType";
import HttpApi from "../../util/HttpApi";
import RegisterRequest from "../../model/RegisterRequest";
import LoginRequest from "../../model/LoginRequest";

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

export function loadSearchJobs(city) {
    return function(dispatch, getState) {
        dispatch({
            type: SEARCH_JOBS,
            payload: HttpApi.searchJobs(city)
        })
    };
}

export function loadJobDetails(jobId) {
    return async function(dispatch, getState) {
        dispatch({
            type: LOAD_JOB_BY_ID_LOADING,
        })

        try{
            const checkFavoriteRes = await HttpApi.checkFavorite(jobId);
            const checkApplicationRes = await HttpApi.checkApplication(jobId);

            console.log(checkFavoriteRes.data, checkApplicationRes.data);

            let jobRes = await HttpApi.jobById(jobId);
            jobRes.data['isFavorite'] = checkFavoriteRes.data.result;
            jobRes.data['isApplicated'] = checkApplicationRes.data.result;

            dispatch({
                type: LOAD_JOB_BY_ID_SUCCESS,
                payload: jobRes
            })
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: LOAD_JOB_BY_ID_ERROR,
            })
        }
    };
}

export function addFavorite(jobId) {
    return async function(dispatch, getState) {
        try{
            await HttpApi.addFavorite(jobId)
            dispatch({
                type: ADD_FAVORITE_SUCCESS
            })
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: FAVORITE_ERROR,
            })
        }
    };
}

export function removeFavorite(jobId) {
    return async function(dispatch, getState) {
        try{
            await HttpApi.deleteFavorite(jobId)
            dispatch({
                type: REMOVE_FAVORITE_SUCCESS
            })
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: FAVORITE_ERROR,
            })
        }
    };
}

export function loadFavorites() {
    return function(dispatch, getState) {
        dispatch( {
            type: GET_FAVORITE,
            payload: HttpApi.favoriteJobs()
        })
    }
}

export function addApplication(jobId) {
    return async function(dispatch, getState) {
        try{
            await HttpApi.addApplication(jobId)
            dispatch({
                type: ADD_APPLICATION_SUCCESS
            })
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: APPLICATION_ERROR,
            })
        }
    };
}

export function removeApplication(jobId) {
    return async function(dispatch, getState) {
        try{
            await HttpApi.deleteApplication(jobId)
            dispatch({
                type: REMOVE_APPLICATION_SUCCESS
            })
        }
        catch(e){
            console.log(e)
            dispatch( {
                type: APPLICATION_ERROR,
            })
        }
    };
}

export function loadApplications() {
    return function(dispatch, getState) {
        dispatch( {
            type: GET_APPLICATION,
            payload: HttpApi.applications()
        })
    }
}

export function cleanError() {
    return {
        type: CLEAN_ERROR
    }
}