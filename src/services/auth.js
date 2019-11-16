import { BehaviorSubject } from 'rxjs';

import {config} from '../config';
import { handleResponse } from '../util/handleResponse';
import { Promise } from 'q';

const currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser'));

export const authService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:username, password:password })
    };

    return fetch(`${config.apiUrl}/api/v1/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', user.token);
            currentUserSubject.next(user);

            return true;
        }).catch((e)=>{
            return Promise.reject(e);
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}