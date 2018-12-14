import moment from 'moment'
import {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate} from '../../actions/filters';
import {SET_END_DATE, SET_START_DATE, SET_TEXT_FILTER, SORT_BY_AMOUNT, SORT_BY_DATE} from '../../actions/CONSTANT'


test('should generate set start date action', ()=>{
    const res = setStartDate(moment(0));
    expect(res).toEqual({
        type: SET_START_DATE,
        startDate: moment(0)
    })
})

test('should generate set end date action', ()=>{
    const res = setEndDate(moment(0));
    expect(res).toEqual({
        type: SET_END_DATE,
        endDate: moment(0)
    })
})

test('should generate set text filter action with default', ()=>{
    const res = setTextFilter();
    expect(res).toEqual({
        type: SET_TEXT_FILTER,
        text: ''
    })
})

test('should generate set text filter action with provide value', ()=>{
    const res = setTextFilter('bill');
    expect(res).toEqual({
        type: SET_TEXT_FILTER,
        text: 'bill'
    })
})



test('should generate sort by amount action', ()=>{
    const res = sortByAmount();
    expect(res).toEqual({
        type: SORT_BY_AMOUNT
    })
})

test('should generate sort by date action', ()=>{
    const res = sortByDate();
    expect(res).toEqual({
        type: SORT_BY_DATE
    })
})