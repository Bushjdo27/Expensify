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
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
    
};