import React, { Component } from 'react';

import { authService } from '../services/auth';
import history from '../util/history';
class Login extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        if (authService.currentUserValue) { 
            history.push('/');
        }
    }
    Login(event){
        event.preventDefault();
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        authService.login(email, password).then((res)=>{
            if(res === true){
                history.push('/');       
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
                            <h5 className="card-title">Login</h5>
                            <form onSubmit={this.Login}>
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
                                        Login
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

export default Login