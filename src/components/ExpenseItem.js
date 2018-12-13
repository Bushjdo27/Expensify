import React from 'react';
import {connect} from 'react-redux';
import {deleteExpense} from '../actions/expenses'

const ExpenseItem = ({id, dispatch, description, amount}) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>
                <strong>Amount: </strong> {amount}
            </p>
            <button 
                onClick={()=> {
                    dispatch(deleteExpense(id))
                }}>
                Remove
            </button>
        </div>
    )
}

export default connect()(ExpenseItem);