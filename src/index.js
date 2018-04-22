import 'semantic-ui-css/semantic.min.css';
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
import { Router, Route }                from 'react-router-dom';
import createSagaMiddleware             from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import thunk                            from 'redux-thunk';
import { composeWithDevTools }          from 'redux-devtools-extension';
// Others
import App                              from './App';
import setAuthorizationHeader           from './utils/setAuthorizationHeader';
import rootSaga                         from './rootSaga';
import history                          from './history';
// Reducers/Actions
import rootReducer                                         from './rootReducer';
import { fetchCurrentUserSuccess, fetchCurrentUserRequest } from './actions/users';



const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
     composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
    );
sagaMiddleware.run(rootSaga);

if (localStorage.bookwormJWT) {
    setAuthorizationHeader(localStorage.bookwormJWT);
    store.dispatch(fetchCurrentUserRequest());
} else {
    store.dispatch(fetchCurrentUserSuccess({}));
}

ReactDOM.render(
<Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
</Router>,
document.getElementById('root')
);

