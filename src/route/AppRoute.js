import React from 'react';
import {Router , Switch , Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard'
import AddExpense from '../pages/AddExpense'
import EditExpense from '../pages/EditExpense'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRoute = () => {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" exact={true} component={Login} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/edit/:id/" component={EditExpense} />
                <Route component={NotFound} />
            </Switch>
            
        </Router>
    )
}


export default AppRoute;