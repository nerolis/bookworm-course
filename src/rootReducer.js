import { combineReducers } from 'redux';

import user         from './reducers/user';
import formErrors   from './reducers/formErrors';
import dreams       from './reducers/dreams';

export default combineReducers({
    user,
    formErrors,
    dreams
})   