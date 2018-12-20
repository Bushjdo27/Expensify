import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRoute from './route/AppRoute';
import configureStore from './store/configureStore'
import './scss/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; //import css for date picker
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters'
const store = configureStore();
const expense = {
    id: '1',
    description: 'This bill for water',
    note: 'this is bill for invite new friends',
    amount: 200,
    createdAt: new Date().getTime()
}
const expense2 = {
    id: '2',
    description: 'This bill for gas',
    note: 'this is bill for buy new gas',
    amount: 100,
    createdAt: new Date().getTime()
}


store.dispatch(addExpense(expense));
store.dispatch(addExpense(expense2));

// setTimeout(() => {
//     store.dispatch(setTextFilter('gas'))
// },3000)

ReactDOM.render(
    <Provider store={store}>
        <AppRoute />
    </Provider>, 
    document.getElementById("root"))