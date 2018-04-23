import { 
  DREAMS_FETCHED,
  DREAM_CREATED, 
  FETCH_DREAMS_REQUEST_SUCCES,
  CREATE_DREAM_REQUEST, 
  CREATE_DREAM_FAILURE,
  DELETE_DREAM_REQUEST,
  DELETE_DREAM_SUCCES
} from '../types';

export const dreamsRequest = dreams => ({
  type: FETCH_DREAMS_REQUEST_SUCCES,
  dreams
});

export const dreamsFetched = dreams => ({
  type: DREAMS_FETCHED,
  dreams
});

export const dreamCreated = dreams => ({
  type: DREAM_CREATED,
  dreams
});

export const createDreamRequest = dream => ({
  type: CREATE_DREAM_REQUEST,
  dream
})

export const createDreamFailure = errors => ({
  type: CREATE_DREAM_FAILURE,
  errors
});

export const deleteDreamRequest = dreamId => ({
  type: DELETE_DREAM_REQUEST,
  dreamId
});

export const dreamDeleted = dreamId => ({
  type: DELETE_DREAM_SUCCES,
  dreamId
});