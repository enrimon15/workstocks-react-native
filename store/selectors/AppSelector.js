function sApp(state) { return state.app; }

export function sPopularJobs(state) { return sApp(state).popularJobs; }
export function sPopularLoading(state) { return sApp(state).loadingPopularJobs; }
export function sPopularError(state) { return sApp(state).errorPopularJobs; }

export function sRecentJobs(state) { return sApp(state).recentJobs; }
export function sRecentLoading(state) { return sApp(state).loadingRecentJobs; }
export function sRecentError(state) { return sApp(state).errorRecentJobs; }

export function sJobDetail(state) { return sApp(state).job; }
export function sJobDetailLoading(state) { return sApp(state).loadingJob; }
export function sJobDetailError(state) { return sApp(state).errorJob; }

export function sSearch(state) { return sApp(state).searchJob; }
export function sSearchLoading(state) { return sApp(state).loadingSearchJobs; }
export function sSearchError(state) { return sApp(state).errorSearchJobs; }

export function sFavorites(state) {return sApp(state).favorites}
export function sFavoritesLoading(state) {return sApp(state).loadingFavorites}
export function sFavoritesError(state) { return sApp(state).errorFavorites; }

export function sApplications(state) {return sApp(state).applications}
export function sApplicationsLoading(state) {return sApp(state).loadingApplications}
export function sApplicationsError(state) { return sApp(state).errorApplications; }