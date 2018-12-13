import React, {Component} from 'react';
import ExpenseForm from '../components/ExpenseForm';


class AddExpense extends Component {
    render() {
        return (
            <div className="u--center bg-grey">
                <main>
                    <h1>Add Expense</h1>
                    <ExpenseForm redirect={this.props.history.push}/>
                </main>
            </div>
        )
        
    }
}


export default AddExpense;