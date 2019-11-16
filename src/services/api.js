import {authHeader}from '../util/authHeader';
import {handleResponse}from '../util/handleResponse';
import {config} from '../config';

export const getExpenses = function getExpenses(startDate, endDate){
    const requestOptions = {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' },authHeader())
    };

    return fetch(`${config.apiUrl}/api/v1/user/expense_details`, requestOptions)
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

            return res;
        }).catch((e)=>{
            return Promise.reject(e);
        });
}
export const addExpenses = function getExpenses(expense_obj){
    const requestOptions = {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' },authHeader()),
        body: JSON.stringify(expense_obj)
    };

    return fetch(`${config.apiUrl}/api/v1/user/add_expense`, requestOptions)
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

export const newCategory = function newCategory(categoryData){
    const requestOptions = {
        method: 'POST',
        headers: Object.assign({ 'Content-Type': 'application/json' },authHeader()),
        body: JSON.stringify(categoryData)
    };

    return fetch(`${config.apiUrl}/api/v1/user/add_category`, requestOptions)
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