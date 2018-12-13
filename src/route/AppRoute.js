import React from 'react';
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Header from '../components/Header'
import Dashboard from '../pages/Dashboard'
import AddExpense from '../pages/AddExpense'
import EditExpense from '../pages/EditExpense'
import Help from '../pages/Help'
import NotFound from '../pages/NotFound'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact={true} component={Dashboard} />
                    <Route path="/add" exact={true} component={AddExpense} />
                    <Route path="/help" exact={true} component={Help} />
                    <Route path="/edit/:id/" exact={true} component={EditExpense} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            
        </BrowserRouter>
    )
}


export default AppRoute;