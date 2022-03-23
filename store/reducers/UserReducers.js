import {INITIAL_STATE} from "../state/UserState";

export default function UserReducers(state = INITIAL_STATE, action) {
    return state
    /*switch (action.type) {
        case 'LOAD_CATEGORIES':
            return {
                ...state,
                loadingCategories:true,
            }
        case 'LOAD_NEW_RELEASES_SUCCESS':
            return {
                ...state,
                newReleases: action.payload,
                loadingNewReleases: false
            };
        default:
            return state
    }*/
}