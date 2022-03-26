function sUser(state) { return state.user; }

export function sUserData(state) { return sUser(state).user; }
export function sUserLoading(state) { return sUser(state).loading; }
export function sUserError(state) { return sUser(state).error; }