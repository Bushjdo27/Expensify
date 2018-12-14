import {addExpense, updateExpense, deleteExpense} from '../../actions/expenses';
import {ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE} from '../../actions/CONSTANT'

const expense = {
    id: '1',
    description: 'This bill for water',
    note: 'this is bill for invite new friends',
    amount: 200,
    createdAt: 10000
}

test(' should add expense action with provide value', ()=>{
    const res = addExpense(expense);
    expect(res).toEqual({
        type: ADD_EXPENSE,
        expense:{...expense}
    })
})

test('should add expense action with default value', () => {
    const res = addExpense({})
    expect(res).toEqual({
        type: ADD_EXPENSE,
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})

test('should update expense action', ()=>{
    const res = updateExpense('1', {...expense, note: 'Update Expense'});
    expect(res).toEqual({
        type: UPDATE_EXPENSE,
        id: '1',
        expense: {...expense, note: 'Update Expense'}
    })
})

test('should delete expense action', ()=>{
    const res = deleteExpense('1');
    expect(res).toEqual({
        type: DELETE_EXPENSE,
        id: '1'
    })
})