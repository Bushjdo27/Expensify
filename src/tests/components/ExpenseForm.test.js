import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render Expense Form', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render message error for invalid input', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    })
    expect(wrapper.state('err')).toBe(true);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', ()=>{
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
});

test('should set note on input change', ()=>{
    const value = 'New note';
    const wrapper = shallow( <ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value)
});

test('should set amount if valid value',()=>{
    const value = '1,22';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid value', ()=>{
    const value = '1.4444';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    expect(wrapper.state('amount').length).toBe(0)
});


test('should call onSubmit for valid form submission ', ()=>{
    const onSubmitSpy = jest.fn(); // return a fake function;

    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });

    expect(wrapper.state('err')).toBe(false);
    expect(onSubmitSpy).toHaveBeenCalled(); // check if function has been called;
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        id: '3',
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })

});

test('should set new date on date change',()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new value on focus change', ()=>{
    const wrapper = shallow(<ExpenseForm />);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true});
    expect(wrapper.state('calendarFocused')).toBe(true);
})