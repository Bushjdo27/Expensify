import {
    ADD_EXPENSE,
    ALL_EXPENSE,
    UPDATE_EXPENSE,
    DELETE_EXPENSE
} from './CONSTANT';
import database from '../firebase/firebase'

export const allExpense = (expenses) => {
    return {
        type: ALL_EXPENSE,
        expenses
    }
}

export const startSetExpense = ()=>{
    return (dispatch, getState) =>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then(snapshot => {
                const expenses = [];

                snapshot.forEach(childSnapshot => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    })
                });
                dispatch(allExpense(expenses))
            })
    }
}

export const addExpense = (expense) => {
    return {
            type: ADD_EXPENSE,
            expense
        }
}
export const startAddExpense = (expenseData = {})=>{
    return (dispatch, getState) => {
        const {description='', note='', amount=0, createdAt=0 } = expenseData;
        const uid = getState().auth.uid;
        const expense = { description, note, amount, createdAt}
        return database.ref(`users/${uid}/expenses`)
                .push(expense)
                .then((ref)=>{
                    dispatch(addExpense({id: ref.key, ...expense}));
                    return 1;
                })
    }
}
export const updateExpense = (id, update) => {
    return {
        type: UPDATE_EXPENSE,
        id,
        expense: update

    }
}

export const startUpdateExpense = (id, update)=>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(update).then(()=>{
                    dispatch(updateExpense(id, update))
                })
    }
}

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE,
        id
        
    }
}
export const startDeleteExpense = (id) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(deleteExpense(id))
        })
    }
}