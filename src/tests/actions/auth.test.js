import {login, logout} from '../../actions/auth';
import {AUTH_LOG_IN, AUTH_LOG_OUT} from '../../actions/CONSTANT';

test('should set login action', ()=>{
    const action = login('1234');
    expect(action).toEqual({
        type: AUTH_LOG_IN,
        uid: '1234'
    })
})

test('should set logout action', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: AUTH_LOG_OUT
    })
})