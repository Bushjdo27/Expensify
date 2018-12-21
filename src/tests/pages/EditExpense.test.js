import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../pages/EditExpense';
import expenses from '../fixtures/expenses'
let updateExpenseSpy, deleteExpenseSpy, history, wrapper;

beforeEach(()=>{
    updateExpenseSpy = jest.fn();
    deleteExpenseSpy = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpense 
            updateExpense={updateExpenseSpy} 
            deleteExpense={deleteExpenseSpy} 
            history={history}
            expense={expenses[0]} 
        />);
});

test('should render EditExpense Page correctly',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should update expense correctly', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(updateExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
});

test('should delete expense correctly',()=>{
    wrapper.find('button').simulate('click');
    expect(deleteExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id)
})