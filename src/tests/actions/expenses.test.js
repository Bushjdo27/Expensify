import configureMockStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import { allExpense, startSetExpense ,startAddExpense, addExpense,startUpdateExpense, updateExpense, startDeleteExpense, deleteExpense} from '../../actions/expenses';
import {ALL_EXPENSE , ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE} from '../../actions/CONSTANT'
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

beforeEach((done)=>{
    const expenseData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expenseData[id] = {description, note, amount, createdAt}
    })
    database.ref('expenses').set(expenseData).then(()=>{
        done();
    })
})

test('should get all expense correctly', ()=>{
    const action = allExpense(expenses[1]);
    expect(action).toEqual({
        type: ALL_EXPENSE,
        expenses: expenses[1]
    })
})

test('should get expenses from database correctly', ()=>{
    const store = createMockStore({});

    store.dispatch(startSetExpense()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: ALL_EXPENSE,
            expenses
        })
    })
})

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


test('should update expense action', ()=>{
    const res = updateExpense('1', {...expense, note: 'Update Expense'});
    expect(res).toEqual({
        type: UPDATE_EXPENSE,
        id: '1',
        expense: {...expense, note: 'Update Expense'}
    })
})

test('should update expense at firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[0].id;
    const update = {
        description: 'Updated for test case'
    };
    store.dispatch(startUpdateExpense(id, update)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: UPDATE_EXPENSE,
            id: id,
            expense:update
        })
        return database.ref(`expenses/${id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val().description).toBe(update.description);
        done();
    })
})

test('should delete expense action', ()=>{
    const res = deleteExpense('1');
    expect(res).toEqual({
        type: DELETE_EXPENSE,
        id: '1'
    })
})

test('should delete expense from firebase', (done)=>{
    const store = createMockStore({});
    const id = expenses[0].id;
    store.dispatch(startDeleteExpense(id)).then(()=>{
        const actions = store.getActions();
        
        expect(actions[0]).toEqual({
            type: DELETE_EXPENSE,
            id: id
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done()
    })
    
})