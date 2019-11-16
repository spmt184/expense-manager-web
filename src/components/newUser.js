import React, { Component } from 'react';

import { authService } from '../services/auth';
import { newUser } from '../services/api';
import history from '../util/history';
class NewUser extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        if (authService.currentUserValue) { 
            history.push('/');
        }
    }
    createUser(event){
        event.preventDefault();
        let username = document.querySelector("#username").value;
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        newUser({
            user_name: username,
            email: email,
            password: password
        }).then((res)=>{
            if(res === true){
                // eslint-disable-next-line no-undef
                alertify.success("Account created, Please login")
                history.push('/login');       
                
            }
        }).catch(e=>{
            // eslint-disable-next-line no-undef
            alertify.error(e);
        });
    }
    render() {
        return (
        <div className="mt-3">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Registration</h5>
                            <form onSubmit={this.createUser}>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name="username"
                                        placeholder="Username"
                                        id="username"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name="email"
                                        placeholder="Email Address"
                                        id="email"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                    ></input>
                                </div>
                                <div className="form-group">
                                    <button
                                        className="btn btn-success"
                                    >
                                        Register
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
        }
};

export default NewUser