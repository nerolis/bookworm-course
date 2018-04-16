import { call, put } from "redux-saga/effects";
import { userLoggedIn } from "../actions/auth";
import api from "../api";

export function* createDreamSaga(action) {
    const dream = yield call(api.dreams.create, action.user);
    yield put(userLoggedIn(dream));
}

export function* fetchDreamSaga() {
  const user = yield call(api.dreams.fetchAll);
  yield put(userLoggedIn(user));
}