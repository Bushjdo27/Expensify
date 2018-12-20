import React from 'react';
import ExpenseItem from './ExpenseItem'
import selectExpenses from '../selector/expenses';
import {connect} from 'react-redux';

export const ExpensesListItem = (props) => {
     return (
         <div>
            {props.expenses.length === 0 ?
                <p>No Expense</p> : 
                props.expenses.map(expense => {
                    return <ExpenseItem key={expense.id} {...expense}/>
                })
            }
         </div>
     )
}



const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}


export default connect(mapStateToProps)(ExpensesListItem);