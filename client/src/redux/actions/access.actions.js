import { SET_ACCESS } from '../action-types.js';

export function setAccess(access) {
    return {
        type: SET_ACCESS,
        payload: access
    };
}

export function login(userData) {
    return dispatch => {
        if (userData.password === '1password' && userData.username === 'ejemplo@gmail.com') {
            dispatch(setAccess(true));
        }
    };
}

export function loginGuest() {
    return dispatch => {
        dispatch(setAccess(true));
    };
}

export function logOut() {
    return dispatch => {
        dispatch(setAccess(false));
    };
}