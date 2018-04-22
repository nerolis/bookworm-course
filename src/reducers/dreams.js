import { DREAMS_FETCHED, DREAM_CREATED } from "../types";

export default function dreams(state = [], action = {}) {
  switch (action.type) {
    case DREAMS_FETCHED:
      return [ ...state, ...action.dreams ];
    case DREAM_CREATED:
      return [ ...state, ...action.dreams ];
    default:
      return state;
  }
}