import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm'
import {updateExpense, deleteExpense} from '../actions/expenses';


export class EditExpense extends Component {

    updateExpense = (expense)=>{
        this.props.updateExpense(this.props.expense.id, expense);
        this.props.history.push('/')
    }

    deleteExpense = ()=>{
        this.props.deleteExpense(this.props.expense.id);
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div className="u--center">
                <main>
                    <p>This is Edit Page</p>
                    <ExpenseForm 
                        edit={true} 
                        expense={this.props.expense} 
                        onSubmit={this.updateExpense}/>

                    <button onClick={this.deleteExpense}>Remove</button>
                </main>
            </div>
            
        )
        
    }
}

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find(item => item.id === props.match.params.id)
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        updateExpense: (id,expense) => dispatch(updateExpense(id, expense)),
        deleteExpense: (id) => dispatch(deleteExpense(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpense);