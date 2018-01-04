import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { localeSet } from './actions/locale';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userFetched, fetchCurrentUser } from './actions/users';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

addLocaleData(en);
addLocaleData(ru);

const store = createStore(
    rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
    );

  if (localStorage.bookwormJWT) {
      setAuthorizationHeader(localStorage.bookwormJWT);                                                                                         
      store.dispatch(fetchCurrentUser());
  } else {
  store.dispatch(userFetched({}));
    
  }

if (localStorage.alhubLang) {
    store.dispatch(localeSet(localStorage.alhubLang))
}

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
</BrowserRouter>,
document.getElementById('root')
);
registerServiceWorker();
