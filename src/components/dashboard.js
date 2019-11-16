import React,  { Component } from 'react'
import { authService } from '../services/auth'
import history from '../util/history';
class Dashboard extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
        if (!authService.currentUserValue) { 
            history.push('/login');
        }
    }
    render(){
    return (
        <div>Dashboard</div>
    )}
};

export default Dashboard