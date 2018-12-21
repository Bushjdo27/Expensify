import React, {Component} from 'react';
import ExpenseForm from '../components/ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses'

export class AddExpense extends Component {

    onSubmit = (expense) => {
        this.props.addExpense(expense);
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
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpense);