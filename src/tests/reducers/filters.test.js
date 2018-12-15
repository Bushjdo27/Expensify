import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import {SET_END_DATE, SET_START_DATE, SET_TEXT_FILTER, SORT_BY_AMOUNT,SORT_BY_DATE} from '../../actions/CONSTANT';


const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('should set up default value', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    //console.log(state)
    expect(state).toEqual(filterReducerDefault);
})

test('should setup sort by amount', ()=>{
    const state = filtersReducer(filterReducerDefault, {type: SORT_BY_AMOUNT});
    expect(state).toEqual({...filterReducerDefault, sortBy: 'amount'});
})

test('should setup sort by date', ()=>{
    const state = filtersReducer(filterReducerDefault, {type: SORT_BY_DATE});
    expect(state).toEqual({...filterReducerDefault, sortBy: 'date'});
})

test('should setup set text filter', ()=>{
    const state = filtersReducer(filterReducerDefault, {type: SET_TEXT_FILTER, text: 'bill'});
    expect(state).toEqual({...filterReducerDefault, text: 'bill'});
})

test('should setup set start date', ()=>{
    const state = filtersReducer(filterReducerDefault, {type: SET_START_DATE, startDate: moment()});
    expect(state).toEqual({...filterReducerDefault, startDate: moment()});
})

test('should setup set end date', ()=>{
    const state = filtersReducer(filterReducerDefault, {type: SET_END_DATE, endDate: moment()});
    expect(state).toEqual({...filterReducerDefault, endDate: moment()});
})
