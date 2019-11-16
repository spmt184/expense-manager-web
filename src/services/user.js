import {handleResponse}from '../util/handleResponse';
import {config} from '../config';

export const newUser = function newUser(userData){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    };

    return fetch(`${config.apiUrl}/api/v1/register`, requestOptions)
        .then(handleResponse)
        .then(res => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            // let user = {
            //     token: res.token,
            //     email: username
            // }
            // localStorage.setItem('currentUser', JSON.stringify(user));
            // currentUserSubject.next(user);
            console.log(res);

            return true;
        }).catch((e)=>{
            return Promise.reject(e);
        });
}