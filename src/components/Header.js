import React , {Component} from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export class Header extends Component{

    handleSignOut = ()=>{
        this.props.startLogOut()
    }
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <h1>Expensify</h1>
                </div>
                <nav>
                    <ul className="header__navigation">
                        <li className="header__navigation__item">
                            <NavLink className="header__navigation__item--link" to="/dashboard" activeClassName="active-nav">
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="header__navigation__item">
                            <NavLink className="header__navigation__item--link" to="/create" activeClassName="active-nav">
                                Create
                            </NavLink>
                        </li>
                        <li className="header__navigation__item">
                            <button onClick={this.handleSignOut} className="header__navigation__item--link">
                                Log Out
                            </button>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogOut: () => dispatch(startLogOut())
    }
}

export default withRouter(connect(undefined, mapDispatchToProps)(Header));