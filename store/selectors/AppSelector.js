function sApp(state) { return state.app; }

export function sPopularJobs(state) { return sApp(state).popularJobs; }
export function sPopularLoading(state) { return sApp(state).loadingPopularJobs; }
export function sPopularError(state) { return sApp(state).errorPopularJobs; }

export function sRecentJobs(state) { return sApp(state).recentJobs; }
export function sRecentLoading(state) { return sApp(state).loadingRecentJobs; }
export function sRecentError(state) { return sApp(state).errorRecentJobs; }