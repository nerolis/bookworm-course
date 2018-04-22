import { call, put }                   from "redux-saga/effects";
import api                             from "../api";
import { 
  dreamsFetched, 
  dreamCreated,
  createDreamFailure
  
} from "../actions/dreams";
import history                         from "../history";

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