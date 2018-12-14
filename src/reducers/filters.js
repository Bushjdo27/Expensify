import {
    SET_END_DATE,
    SET_START_DATE,
    SET_TEXT_FILTER,
    SORT_BY_AMOUNT,
    SORT_BY_DATE
} from '../actions/CONSTANT'
import moment from 'moment'
const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default function(state = filterReducerDefault, action) {

    switch(action.type) {
        case SET_START_DATE: 
            return  {
                ...state,
                startDate: action.startDate
            };
        case SET_END_DATE: 
            return {
                ...state,
                endDate: action.endDate
            };
        case SET_TEXT_FILTER: 
            return {
                ...state,
                text: action.text
            }
        case SORT_BY_AMOUNT: 
            return {
                ...state,
                sortBy: 'amount'
            };
        case SORT_BY_DATE: 
            return {
                ...state,
                sortBy: 'date'
            };
        
        default: 
            return state;
    }
}