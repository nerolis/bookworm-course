import { DREAMS_FETCHED, DREAM_CREATED, FETCH_DREAMS_REQUEST_SUCCES, CREATE_DREAM_REQUEST} from '../types';

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