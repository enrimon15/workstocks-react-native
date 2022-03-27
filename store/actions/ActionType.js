import {ActionType} from "redux-promise-middleware";

export const LOAD_RECENT_JOBS = 'LOAD_RECENT_JOBS';
export const LOAD_RECENT_JOBS_LOADING = `${LOAD_RECENT_JOBS}_${ActionType.Pending}`;
export const LOAD_RECENT_JOBS_SUCCESS = `${LOAD_RECENT_JOBS}_${ActionType.Fulfilled}`;
export const LOAD_RECENT_JOBS_ERROR = `${LOAD_RECENT_JOBS}_${ActionType.Rejected}`;

export const LOAD_POPULAR_JOBS = 'LOAD_POPULAR_JOBS';
export const LOAD_POPULAR_JOBS_LOADING = `${LOAD_POPULAR_JOBS}_${ActionType.Pending}`;
export const LOAD_POPULAR_JOBS_SUCCESS = `${LOAD_POPULAR_JOBS}_${ActionType.Fulfilled}`;
export const LOAD_POPULAR_JOBS_ERROR = `${LOAD_POPULAR_JOBS}_${ActionType.Rejected}`;

export const SEARCH_JOBS = 'LOAD_SEARCH_JOBS';
export const SEARCH_JOBS_LOADING = `${SEARCH_JOBS}_${ActionType.Pending}`;
export const SEARCH_JOBS_SUCCESS = `${SEARCH_JOBS}_${ActionType.Fulfilled}`;
export const SEARCH_JOBS_ERROR = `${SEARCH_JOBS}_${ActionType.Rejected}`;

export const LOAD_JOB_BY_ID = 'LOAD_JOB_BY_ID';
export const LOAD_JOB_BY_ID_LOADING = `${LOAD_JOB_BY_ID}_${ActionType.Pending}`;
export const LOAD_JOB_BY_ID_SUCCESS = `${LOAD_JOB_BY_ID}_${ActionType.Fulfilled}`;
export const LOAD_JOB_BY_ID_ERROR = `${LOAD_JOB_BY_ID}_${ActionType.Rejected}`;

export const GET_FAVORITE = 'GET_FAVORITE';
export const GET_FAVORITE_LOADING = `${GET_FAVORITE}_${ActionType.Pending}`;
export const GET_FAVORITE_SUCCESS = `${GET_FAVORITE}_${ActionType.Fulfilled}`;
export const REMOVE_FAVORITE_LIST = `REMOVE_FAVORITE_LIST_${ActionType.Fulfilled}`;
export const FAVORITE_ERROR = `${GET_FAVORITE}_${ActionType.Rejected}`;

export const GET_APPLICATION = 'GET_APPLICATION';
export const GET_APPLICATION_LOADING = `${GET_APPLICATION}_${ActionType.Pending}`;
export const GET_APPLICATION_SUCCESS = `${GET_APPLICATION}_${ActionType.Fulfilled}`;
export const APPLICATION_ERROR = `${GET_APPLICATION}_${ActionType.Rejected}`;

export const ADD_FAVORITE_SUCCESS = `ADD_FAVORITE_${ActionType.Fulfilled}`;
export const REMOVE_FAVORITE_SUCCESS = `REMOVE_FAVORITE_${ActionType.Fulfilled}`;

export const ADD_APPLICATION_SUCCESS = `ADD_APPLICATION_${ActionType.Fulfilled}`;
export const REMOVE_APPLICATION_SUCCESS = `REMOVE_APPLICATION_${ActionType.Fulfilled}`;

export const USER = 'USER';
export const USER_LOADING = `${USER}_${ActionType.Pending}`;
export const USER_SUCCESS = `${USER}_${ActionType.Fulfilled}`;
export const USER_ERROR = `${USER}_${ActionType.Rejected}`;
export const USER_LOGOUT = 'USER_LOGOUT';

export const CLEAN_ERROR = 'CLEAN_ERROR';

export const REINIT_APP_STATE = 'REINIT_APP_STATE';