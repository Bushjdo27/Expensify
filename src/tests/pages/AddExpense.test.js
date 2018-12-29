import React from 'react';
import {shallow} from 'enzyme';
import { AddExpense } from '../../pages/AddExpense';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;

beforeEach(()=>{
    startAddExpense = jest.fn();
    history = { push: jest.fn()}
    wrapper = shallow(<AddExpense startAddExpense={startAddExpense} history={history} />);
})

test('should render addExpense correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0])
})