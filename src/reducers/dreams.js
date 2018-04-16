import { DREAM_CREATED, DREAMS_FETCHED } from "../types";

export default function dream(state = {}, action = {}) {
  switch (action.type) {
    case DREAMS_FETCHED:
    case DREAM_CREATED:
      return { ...state, ...action.dreams };
    default:
      return state;
  }
}