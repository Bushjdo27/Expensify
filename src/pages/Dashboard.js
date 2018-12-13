import React, {Component} from 'react';
import {connect} from 'react-redux';
import ExpensesListItem from '../components/ExpensesListItem';
import selectExpenses from '../selector/expenses';
import ExpenseFilter from '../components/ExpenseFilter'
class Dashboard extends Component {
    render() {
        return (
            
            <div className="u--center">
                <main>
                    <ExpenseFilter />
                    <h1>Expense List</h1>
                    <ExpensesListItem list={this.props.expenses}/>
                </main>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(Dashboard);