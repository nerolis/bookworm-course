import { call, put } from "redux-saga/effects";
import { userLoggedIn } from "../actions/auth";
import { createUserFailure } from "../actions/users";
import api from "../api";

export function* createDreamSaga(action) {
  try {
    const user = yield call(api.user.signup, action.user);
    localStorage.bookwormJWT = user.token;
    yield put(userLoggedIn(user));
    history.push("/dashboard");
  } catch (err) {
    yield put(createUserFailure(err.response.data.errors));
  }
}

export function* fetchDreamSaga() {
  const user = yield call(api.user.fetchCurrentUser);

  yield put(userLoggedIn(user));
}