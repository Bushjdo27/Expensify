import React from 'react';
import ExpenseItem from './ExpenseItem'


const ExpensesListItem = ({list}) => {
     return list.map(expense => {
         return <ExpenseItem key={expense.id} {...expense}/>
     })
}


export default ExpensesListItem;