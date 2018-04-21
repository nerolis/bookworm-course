import { call, put } from "redux-saga/effects";
import { dreamsFetched, dreamCreated } from "../actions/dreams";
import api from "../api";

export function* createDreamSaga(action) {
  const dream = yield call(api.dreams.create, action.user);
  yield put(dreamCreated(dream));
}

export function* fetchDreamSaga() {
  const dreams = yield call(api.dreams.fetchAll);
  yield put(dreamsFetched(dreams));
}