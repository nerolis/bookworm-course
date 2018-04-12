import { USER_LOGGED_IN, USER_LOGGED_OUT, FETCH_CURRENT_USER_SUCCES } from "../types";

export default function user(state = { loaded: false }, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return { ...action.user, Loaded: true }
        case FETCH_CURRENT_USER_SUCCES:
            return { ...state, ...action.user, loaded: true };
        case USER_LOGGED_OUT:
            return { loaded: true };
        default:
            return state;
    }
}