import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({Auth, startLogin}) => {
    return (
        <div>
            <h1>This is Login Page</h1>
            <button onClick={startLogin}>Login</button>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        //Auth: state.Auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin : () => dispatch(startLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);