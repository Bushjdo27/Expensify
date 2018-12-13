import React , {Component} from 'react';
import { NavLink} from 'react-router-dom'

class Header extends Component{
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <h1>Expensify</h1>
                </div>
                <nav>
                    <ul className="header__navigation">
                        <li className="header__navigation__item">
                            <NavLink className="header__navigation__item--link" exact={true} to="/" activeClassName="active-nav">
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="header__navigation__item">
                            <NavLink className="header__navigation__item--link" to="/add" activeClassName="active-nav">
                                Add
                            </NavLink>
                        </li>
                        <li className="header__navigation__item">
                            <NavLink className="header__navigation__item--link" to="/help" activeClassName="active-nav">
                                Help
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;