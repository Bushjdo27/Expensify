import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRoute, {history} from './route/AppRoute';
import configureStore from './store/configureStore'
import './scss/styles.scss';
import 'react-dates/lib/css/_datepicker.css'; //import css for date picker
import {startSetExpense} from './actions/expenses';
import {login, logout} from './actions/auth';
import { firebase } from './firebase/firebase';
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRoute />
    </Provider>
);

let hasRendered = false;

const renderApp = ()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById("root"));
        hasRendered = true;
    }
}
ReactDOM.render(
    <p>Loading...</p>, 
    document.getElementById("root"))



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    }else{
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})