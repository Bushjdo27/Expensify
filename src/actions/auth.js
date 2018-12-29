import { firebase, googleAuthProvider } from '../firebase/firebase';
import { AUTH_LOG_IN, AUTH_LOG_OUT } from './CONSTANT';

export const login = (uid)=>{
    return {
        type: AUTH_LOG_IN,
        uid
    }
}

export const startLogin = ()=>{
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = ()=>{
    return {
        type: AUTH_LOG_OUT
    }
}

export const startLogOut = () => {
    return (dispatch) => {
        firebase.auth().signOut();
    }
}