import { BehaviorSubject } from 'rxjs';

import {config} from '../config';
import { handleResponse } from '../util/handleResponse';
import { Promise } from 'q';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

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
        .then(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let user = {
                token: res.token,
                email: username
            }
            localStorage.setItem('currentUser', JSON.stringify(user));
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