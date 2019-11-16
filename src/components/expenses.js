import React,  { Component } from 'react'

class Dashboard extends Component  {
    
    render(){
    return (
        <div>
            <table className="table table-border">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
            {this.props.expenses.length > 0 ?
                this.props.expenses.map(expense =>
                    <tr>
                        <td>{expense.date_added}</td>
                        <td>{expense.amount}</td>  
                        <td>{expense.category}</td>  
                        <td>{expense.description}</td>  
                    </tr>
                )
                :
                <tr><td colSpan="4"><span className="text-muted">No Expenses Found</span></td></tr>
            }
            
            </tbody>
            </table>

        </div>
    )}
};

export default Dashboard
