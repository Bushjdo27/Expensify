import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm'
import {startUpdateExpense, startDeleteExpense} from '../actions/expenses';


export class EditExpense extends Component {

    startUpdateExpense = (expense)=>{
        this.props.startUpdateExpense(this.props.expense.id, expense);
        this.props.history.push('/')
    }

    startDeleteExpense = ()=>{
        this.props.startDeleteExpense(this.props.expense.id);
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
                        onSubmit={this.startUpdateExpense}/>

                    <button onClick={this.startDeleteExpense}>Remove</button>
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
        startUpdateExpense: (id,expense) => dispatch(startUpdateExpense(id, expense)),
        startDeleteExpense: (id) => dispatch(startDeleteExpense(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditExpense);