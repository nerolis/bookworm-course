import { takeLatest } from "redux-saga/effects";
import {
  CREATE_USER_REQUEST,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_DREAMS_REQUEST_SUCCES,
  CREATE_DREAM_REQUEST,
  DELETE_DREAM_REQUEST,
  FETCH_ONE_DREAM_REQUEST
} from "./types";
import { createUserSaga, fetchUserSaga }                     from "./sagas/usersSaga";
import { createDreamSaga, fetchDreamSaga, deleteDreamSaga, fetchOneDreamSaga}   from "./sagas/dreamsSagas";

export default function* rootSaga() {
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
  
  yield takeLatest(FETCH_ONE_DREAM_REQUEST, fetchOneDreamSaga);
  yield takeLatest(CREATE_DREAM_REQUEST, createDreamSaga);
  yield takeLatest(FETCH_DREAMS_REQUEST_SUCCES, fetchDreamSaga);
  yield takeLatest(DELETE_DREAM_REQUEST, deleteDreamSaga);

}