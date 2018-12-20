import React, {Component} from 'react';
import ExpensesListItem from '../components/ExpensesListItem';
import ExpenseFilter from '../components/ExpenseFilter';


class Dashboard extends Component {
    render() {
        return (
            
            <div className="u--center">
                <main>
                    <ExpenseFilter />
                    <h1>Expense List</h1>
                    <ExpensesListItem />
                </main>
            </div>
        )
        
    }
}

export default Dashboard;