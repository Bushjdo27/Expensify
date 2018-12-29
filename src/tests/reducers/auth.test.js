import { AUTH_LOG_IN, AUTH_LOG_OUT } from '../../actions/CONSTANT';
import authReducer from '../../reducers/auth';

test('should set login', ()=>{
    const res = authReducer({}, {type: AUTH_LOG_IN, uid: '1234'});
    expect(res).toEqual({uid: '1234'})
})

test('should set logout', ()=> {
    const res = authReducer({}, {type: AUTH_LOG_OUT});
    expect(res).toEqual({});
})