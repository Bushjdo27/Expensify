import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import {connect} from 'react-redux';
import {deleteExpense} from '../actions/expenses';
import { Link } from 'react-router-dom';


export const ExpenseItem = ({id, dispatch, description, amount, createdAt}) => {
    return (
        <div>
            <Link className="link-text" to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            <p>
                <strong>{numeral(amount).format('$0,0.00')} </strong>  
                    - 
                {moment(createdAt).format('MMMM Do, YYYY')}
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