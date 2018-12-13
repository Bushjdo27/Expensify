import {
    ADD_EXPENSE,
    ALL_EXPENSE,
    UPDATE_EXPENSE,
    DELETE_EXPENSE
} from '../actions/CONSTANT';


export default function(state = [], action){

    switch(action.type) {
        case ALL_EXPENSE: 
            return state;
        case ADD_EXPENSE: 
            return [
                ...state,
                action.expense
            ];
        case UPDATE_EXPENSE: 
            return state.map(expense => {
                if(expense.id === action.expense.id){
                    return action.expense
                }
                return expense
            });
        case DELETE_EXPENSE: 
            return state.filter(expense => expense.id !== action.id);
        
        default: 
            return state;
    }
}