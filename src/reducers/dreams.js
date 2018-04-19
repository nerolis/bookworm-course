import { DREAM_CREATED, DREAMS_FETCHED } from "../types";

export default function dreams(state = { }, action = {}) {
  switch (action.type) {
    case DREAMS_FETCHED:
      return { ...state, ...action.dreams};
    case DREAM_CREATED:
      return { loaded: true };
    default:
      return state;
  }
}