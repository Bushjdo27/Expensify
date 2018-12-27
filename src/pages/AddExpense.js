import React, {Component} from 'react';
import ExpenseForm from '../components/ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses'

export class AddExpense extends Component {

    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="u--center bg-grey">
                <main>
                    <h1>Add Expense</h1>
                    <ExpenseForm 
                        onSubmit={this.onSubmit}/>
                </main>
            </div>
        )
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpense);