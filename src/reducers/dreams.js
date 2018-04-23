import { DREAMS_FETCHED, DREAM_CREATED, DELETE_DREAM_SUCCES } from "../types";

export default function dreams(state = [], action = {}) {
  switch (action.type) {
    case DREAMS_FETCHED:
      return [ ...state, ...action.dreams ];
    case DREAM_CREATED:
      return [ ...state, ...action.dreams ];
    case DELETE_DREAM_SUCCES:
      return state.filter(dream => dream.dreamId !== action.dreamId)
    default:
      return state;
  }
}