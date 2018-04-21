import { takeLatest } from "redux-saga/effects";
import 
{
  CREATE_USER_REQUEST,
  FETCH_CURRENT_USER_REQUEST,
  DREAM_CREATED,
  FETCH_DREAMS_REQUEST_SUCCES,
} 
from "./types";
import { createUserSaga, fetchUserSaga }                     from "./sagas/usersSaga";
import { createDreamSaga, fetchDreamSaga }                   from "./sagas/dreamsSagas";

export default function* rootSaga() {
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
  yield takeLatest(DREAM_CREATED, createDreamSaga);
  yield takeLatest(FETCH_DREAMS_REQUEST_SUCCES, fetchDreamSaga);
}