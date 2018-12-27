import {combineReducers, applyMiddleware, createStore, compose} from 'redux';
import Thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(Thunk))
        
    )

    return store;
    
};