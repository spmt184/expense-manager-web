import React,  { Component } from 'react'
import { authService } from '../services/auth';
import { getExpenses, addExpenses, newCategory } from '../services/api';
import Expenses from './expenses';
import history from '../util/history';
class Dashboard extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            expenses: []
        };
        if (!authService.currentUserValue) { 
            history.push('/login');
        }
        this.updateExpenses();
        // newCategory({
        //     "name": "testCategory"
        // })
        // addExpenses({
        //     "category": "testCategory",
        //     "amount": 190,
        //     "description": "Food"
        // })
        // newUser({
        //     "user_name": "test",
        //     "email": "bharat@gmail.com",
        //     "password": "123456"
        // })

    }
    updateExpenses(){
        getExpenses().then((expenses)=>{
            this.setState({
                expenses: expenses
            })
        }).catch(e=>{
            this.setState({
                expenses: []
            })
        })
    }
    render(){
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h2>Your Expenses</h2>
                    <Expenses expenses={this.state.expenses}/>
                </div>
            </div>
            
        </div>
    )}
};

export default Dashboard