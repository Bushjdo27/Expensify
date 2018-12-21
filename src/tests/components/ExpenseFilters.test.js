import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseFilter } from '../../components/ExpenseFilter';
import {filters , altFilters} from '../fixtures/filters'
let wrapper, sortByDate, sortByAmount, setStartDate, setEndDate,setTextFilter;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseFilter 
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            filters={filters}
        />)
})

test('should render expense filter correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
})
test('should render expense filter with alt data correctly', ()=>{
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot();
});

test('should handle textFilter', ()=>{
    const value = 'macbook'
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sortByDate',()=>{
    wrapper.find('select').simulate('change', {
        target: {value: 'date'}
    });

    expect(sortByDate).toHaveBeenCalled();
})

test('should handle sortByAmount',()=>{
    wrapper.find('select').simulate('change', {
        target: {value: 'amount'}
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', ()=> {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    });

    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
})

test('should handle date focus change',()=>{
    const calendarFocus = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocus);
    expect(wrapper.state('calendarFocus')).not.toBe(null);
    expect(wrapper.state('calendarFocus')).toBe(calendarFocus);
})