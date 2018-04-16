import { DREAMS_FETCHED, DREAM_CREATED } from '../types';

export const dreamsFetched = dreams => ({
  type: DREAMS_FETCHED,
  dreams
});

export const dreamCreated = dreams => ({
  type: DREAM_CREATED,
  dreams
});

