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

export const LOAD_SEARCH_JOBS = 'LOAD_SEARCH_JOBS';
export const LOAD_SEARCH_JOBS_LOADING = `${LOAD_SEARCH_JOBS}_${ActionType.Pending}`;
export const LOAD_SEARCH_JOBS_SUCCESS = `${LOAD_SEARCH_JOBS}_${ActionType.Fulfilled}`;
export const LOAD_SEARCH_JOBS_ERROR = `${LOAD_SEARCH_JOBS}_${ActionType.Rejected}`;