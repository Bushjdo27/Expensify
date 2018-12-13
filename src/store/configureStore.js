import {combineReducers, applyMiddleware, createStore} from 'redux';
import Thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        {},
        applyMiddleware(Thunk)
    )

    return store;
    
};