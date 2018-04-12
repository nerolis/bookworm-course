import api from '../api';
import { userLoggedIn } from './auth';
import { USER_FETCHED, CREATE_USER_REQUEST } from '../types';

export const userFetched = user => ({
    type: USER_FETCHED,
    user
})


export const createUserRequest = user => ({
    type: CREATE_USER_REQUEST,
    user
});

export const signup = data => dispatch => 
    api.user.signup(data).then(user => {
        localStorage.bookwormJWT = user.token;
        dispatch(userLoggedIn(user))});

export const fetchCurrentUser = () => dispatch =>
    api.user.fetchCurrentUser().then(user => dispatch(userFetched(user)));