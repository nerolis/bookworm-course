import { takeLatest } from "redux-saga/effects";
import 
{
  CREATE_USER_REQUEST,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_DREAMS_REQUEST_SUCCES,
  CREATE_DREAM_REQUEST,

} 

from "./types";
import { createUserSaga, fetchUserSaga }                     from "./sagas/usersSaga";
import { createDreamSaga, fetchDreamSaga }                   from "./sagas/dreamsSagas";

export default function* rootSaga() {
  yield takeLatest(CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
  
  yield takeLatest(CREATE_DREAM_REQUEST, createDreamSaga);
  yield takeLatest(FETCH_DREAMS_REQUEST_SUCCES, fetchDreamSaga);
}