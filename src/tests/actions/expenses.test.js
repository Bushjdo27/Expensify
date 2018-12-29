import configureMockStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import {startAddExpense, addExpense, updateExpense, deleteExpense} from '../../actions/expenses';
import {ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE} from '../../actions/CONSTANT'
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([Thunk]);
const expense = {
    id: '1',
    description: 'This bill for water',
    note: 'this is bill for invite new friends',
    amount: 200,
    createdAt: 10000
}

test(' should add expense action with provide value', ()=>{
    const res = addExpense(expenses[2]);
    expect(res).toEqual({
        type: ADD_EXPENSE,
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done)=>{
    const store = createMockStore({});
    const expenseData = {
        description: 'This bill for water, testing case',
        note: 'this is bill for invite new friends',
        amount: 200,
        createdAt: 10000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions(); // this is current State of Store;
        expect(actions[0]).toEqual({
            type: ADD_EXPENSE,
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');  
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done(); // tell jest -> the test is complete, if we do not call this function -> jest will wait
    })
});

test('should add expense with default value to database and store', (done)=>{
    const store = createMockStore({});
    const defaultValue = {
        description:'',
        note:'',
        amount:0,
        createdAt:0 
    }
    store.dispatch(startAddExpense(defaultValue)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: ADD_EXPENSE,
            expense: {
                id: expect.any(String),
                ...defaultValue
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(defaultValue);
        done();
    })
})

// test('should add expense action with default value', () => {
//     const res = addExpense({})
//     expect(res).toEqual({
//         type: ADD_EXPENSE,
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })

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