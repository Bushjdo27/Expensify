import React, {Component} from 'react';
import ExpenseForm from '../components/ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'

class AddExpense extends Component {
    render() {
        return (
            <div className="u--center bg-grey">
                <main>
                    <h1>Add Expense</h1>
                    <ExpenseForm 
                        onSubmit={(expense)=>{
                            this.props.dispatch(addExpense(expense));
                            this.props.history.push('/')
                        }}
                        redirect={this.props.history.push}/>
                </main>
            </div>
        )
        
    }
}


export default connect()(AddExpense);