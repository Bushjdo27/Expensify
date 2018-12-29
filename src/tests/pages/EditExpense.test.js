import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../pages/EditExpense';
import expenses from '../fixtures/expenses'
let startUpdateExpense, startDeleteExpense, history, wrapper;

beforeEach(()=>{
    startUpdateExpense = jest.fn();
    startDeleteExpense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpense 
            startUpdateExpense={startUpdateExpense} 
            startDeleteExpense={startDeleteExpense} 
            history={history}
            expense={expenses[0]} 
        />);
});

test('should render EditExpense Page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should update expense correctly', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(startUpdateExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
});

test('should delete expense correctly',()=>{
    wrapper.find('button').simulate('click');
    expect(startDeleteExpense).toHaveBeenLastCalledWith(expenses[0].id)
})