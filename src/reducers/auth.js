import {AUTH_LOG_IN, AUTH_LOG_OUT} from '../actions/CONSTANT'
export default function(state = {}, action){
    switch(action.type){
        case AUTH_LOG_IN: 
            return {
                uid: action.uid
            }
        case AUTH_LOG_OUT: 
            return {}
        default:
            return state;
    }
}