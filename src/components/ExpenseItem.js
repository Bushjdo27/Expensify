import React from 'react';
import {connect} from 'react-redux';
import {deleteExpense} from '../actions/expenses'
import { Link } from 'react-router-dom'

export const ExpenseItem = ({id, dispatch, description, amount}) => {
    return (
        <div>
            <Link className="link-text" to={`/edit/${id}`}>
                {description}
            </Link>
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