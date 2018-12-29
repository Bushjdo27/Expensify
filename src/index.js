import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRoute from './route/AppRoute';
import configureStore from './store/configureStore'
import './scss/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; //import css for date picker
import {startSetExpense} from './actions/expenses';
//import './firebase/101/firebase'
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
)
ReactDOM.render(
    <p>Loading...</p>, 
    document.getElementById("root"))

store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(
        jsx, 
        document.getElementById("root"))
})
