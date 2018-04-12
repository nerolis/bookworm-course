import { combineReducers } from 'redux';

import user         from './reducers/user';
import books        from './reducers/books';
import locale       from './reducers/locale';
import characters   from './reducers/characters';

export default combineReducers({
    user,
    characters,
    books,
    locale,
})   