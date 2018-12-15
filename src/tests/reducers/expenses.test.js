import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import {ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, ALL_EXPENSE} from '../../actions/CONSTANT';
import expenses from '../fixtures/expenses';


test('should set default value', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should add expense', ()=>{
    const expense = {
        id: '4',
        description: 'This is for test',
        note: 'This is a note for testing',
        amount: 9000,
        createdAt: moment()
    }
    const state = expensesReducer(expenses, {type: ADD_EXPENSE, expense})
    expect(state.length).toBe(4);
    expect(state).toEqual([...expenses, expense]);
})

test('should update expense value', ()=>{
    const update = {
        id: expenses[2].id,
        description: 'Credit Card 222',
        note: 'Note was updated',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
    const state = expensesReducer(expenses, {
        type: UPDATE_EXPENSE,
        id: expenses[2].id,
        expense: update

    });
    expect(state[2]).toEqual(update);
})

test('should not update when not found', ()=>{
    const update = {
        id: -1,
        note: "not found"
    }
    const state = expensesReducer(expenses, {type: UPDATE_EXPENSE, id: update.id, expense:update});
    expect(state).toEqual(expenses);
})

test('should delete expense', ()=>{
    const state = expensesReducer(expenses, {type: DELETE_EXPENSE, id: expenses[1].id});
    expect(state).toEqual([expenses[0], expenses[2]]);
})
test('should not delete expense when not found id', ()=>{
    const state = expensesReducer(expenses, {type: DELETE_EXPENSE, id: '-1'});
    expect(state).toEqual([expenses[0], expenses[1],expenses[2]]);
})