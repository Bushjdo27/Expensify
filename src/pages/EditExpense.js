import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm'
import {updateExpense, deleteExpense} from '../actions/expenses'
import { timingSafeEqual } from 'crypto';
class EditExpense extends Component {

    
    
    render() {
        console.log(this.props.expense)
        return (
            <div className="u--center">
                <main>
                    <p>This is Edit Page</p>
                    <p>ID is : {this.props.match.params.id} </p>
                    <ExpenseForm 
                        edit={true} 
                        expense={this.props.expense} 
                        onSubmit={(expense)=>{
                            this.props.dispatch(updateExpense(this.props.expense.id, expense));
                            this.props.history.push('/')
                        }}/>

                    <button onClick={()=>{
                        this.props.dispatch(deleteExpense(this.props.expense.id));
                        this.props.history.push('/')
                    }}>Remove</button>
                </main>
            </div>
            
        )
        
    }
}

const mapStateToProps = (state, props) =>{
    console.log(state.expenses)
    return {
        expense: state.expenses.find(item => item.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpense);