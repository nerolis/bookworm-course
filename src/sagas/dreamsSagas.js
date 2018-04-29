import { call, put }                   from "redux-saga/effects";
import api                             from "../api";
import { 
  dreamsFetched, 
  dreamCreated,
  createDreamFailure,
  dreamDeleted,
  fetchOneDreamSucces
  
} from "../actions/dreams";
import history                         from "../utils/history";

export function* createDreamSaga(action) {
  try {
  const dream = yield call(api.dreams.create, action.dream);
  history.push("/dashboard");
  yield put(dreamCreated(dream));
  } catch (err) {
    yield put(createDreamFailure(err.response.data.errors));
  }
}

export function* fetchDreamSaga() {
  const dreams = yield call(api.dreams.fetchAll);
  yield put(dreamsFetched(dreams));
}

export function* deleteDreamSaga(action) {
  const dream = yield call(api.dreams.deleteDream, action.dreamId);
  yield put(dreamDeleted(dream));
}

export function* fetchOneDreamSaga(action) {
  const dream = yield call(api.dreams.fetchOne, action.dreamId);
  yield put(fetchOneDreamSucces(dream));
}