import { call, put } from "redux-saga/effects";
import { dreamsFetched, dreamCreated } from "../actions/dreams";
import api from "../api";

export function* createDreamSaga(action) {
  const dream = yield call(api.dreams.create, action.user);
  yield put(dreamCreated(dream));
}

export function* fetchDreamSaga(action) {
  const dreams = yield call(api.dreams.fetchAll, action.dreams);
  yield put(dreamsFetched(dreams));
}