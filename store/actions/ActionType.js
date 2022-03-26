import {ActionType} from "redux-promise-middleware";

export const LOAD_RECENT_JOBS = 'LOAD_RECENT_JOBS';
export const LOAD_RECENT_JOBS_LOADING = `${LOAD_RECENT_JOBS}_${ActionType.Pending}`;
export const LOAD_RECENT_JOBS_SUCCESS = `${LOAD_RECENT_JOBS}_${ActionType.Fulfilled}`;
export const LOAD_RECENT_JOBS_ERROR = `${LOAD_RECENT_JOBS}_${ActionType.Rejected}`;

export const LOAD_POPULAR_JOBS = 'LOAD_POPULAR_JOBS';
export const LOAD_POPULAR_JOBS_LOADING = `${LOAD_POPULAR_JOBS}_${ActionType.Pending}`;
export const LOAD_POPULAR_JOBS_SUCCESS = `${LOAD_POPULAR_JOBS}_${ActionType.Fulfilled}`;
export const LOAD_POPULAR_JOBS_ERROR = `${LOAD_POPULAR_JOBS}_${ActionType.Rejected}`;

export const LOAD_JOB_BY_ID = 'LOAD_JOB_BY_ID';
export const LOAD_JOB_BY_ID_LOADING = `${LOAD_JOB_BY_ID}_${ActionType.Pending}`;
export const LOAD_JOB_BY_ID_SUCCESS = `${LOAD_JOB_BY_ID}_${ActionType.Fulfilled}`;
export const LOAD_JOB_BY_ID_ERROR = `${LOAD_JOB_BY_ID}_${ActionType.Rejected}`;

export const SEARCH_JOBS = 'LOAD_SEARCH_JOBS';
export const SEARCH_JOBS_LOADING = `${SEARCH_JOBS}_${ActionType.Pending}`;
export const SEARCH_JOBS_SUCCESS = `${SEARCH_JOBS}_${ActionType.Fulfilled}`;
export const SEARCH_JOBS_ERROR = `${SEARCH_JOBS}_${ActionType.Rejected}`;

export const USER = 'USER';
export const USER_LOADING = `${USER}_${ActionType.Pending}`;
export const USER_SUCCESS = `${USER}_${ActionType.Fulfilled}`;
export const USER_ERROR = `${USER}_${ActionType.Rejected}`;
export const USER_LOGOUT = 'USER_LOGOUT';