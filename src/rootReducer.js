import { combineReducers } from 'redux';

import user         from './reducers/user';
import books        from './reducers/books';
import characters   from './reducers/characters';
import formErrors   from './reducers/formErrors';
import dreams       from './reducers/dreams';

export default combineReducers({
    user,
    characters,
    books,
    formErrors,
    dreams
})   