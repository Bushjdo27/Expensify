import {
    ADD_EXPENSE,
    ALL_EXPENSE,
    UPDATE_EXPENSE,
    DELETE_EXPENSE
} from './CONSTANT';


export const addExpense = ({id='',description='', note='', amount=0, createdAt=0 }={}) => {
    return {
        type: ADD_EXPENSE,
        expense: {
            id,
            description,
            note,
            amount,
            createdAt
        }
        

    }
}

export const updateExpense = (id, update) => {
    return {
        type: UPDATE_EXPENSE,
        id,
        expense: update

    }
}

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE,
        id

    }
}