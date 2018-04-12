import { call, put }    from 'redux-saga/effects';
import { userLoggedIn } from '../actions/auth';
import api              from '../api';

export default function* createUserSaga(action) {
  const user = yield call(api.user.signup, action.user);
  localStorage.bookwormJWT = user.token;
  yield put(userLoggedIn(user));
}