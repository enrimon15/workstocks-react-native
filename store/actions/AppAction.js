import {LOAD_RECENT_JOBS} from "./ActionType";


export function testChangeRecentJobs(recentJobs) {
    return {
        type: LOAD_RECENT_JOBS,
        payload: recentJobs
    };
}