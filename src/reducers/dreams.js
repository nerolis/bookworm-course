import { DREAMS_FETCHED } from "../types";

export default function dreams(state = [], action = {}) {
  switch (action.type) {
    case DREAMS_FETCHED:
      return [...state, ...action.dreams ];
    default:
      return state;
  }
}