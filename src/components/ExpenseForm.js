import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addExpense} from '../actions/expenses'

class ExpenseForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            description: '',
            amount: 1,
            note: '',
            createdAt: new Date().getTime()
        }
    }

    onDescriptionChange = (e)=>{
        console.log('de')
        const description = e.target.value;
        this.setState(()=>{
            return {
                description
            }
        })
    }

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(amount.match(/^[1-9]\d*(.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.dispatch(addExpense({...this.state, id: 3}))
        this.props.redirect('/')
    }
    render(){
        const {description , amount , note} = this.state;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="input__box">
                        <input 
                            onChange={this.onDescriptionChange} 
                            value={description} 
                            type="text" 
                            id="description" 
                            name="description" 
                            required />
                        <label htmlFor="description"> Description</label>
                    </div>

                    <div className="input__box">
                        <input 
                            onChange={this.onAmountChange} 
                            value={amount} 
                            type="number" 
                            id="amount" 
                            name="amount" 
                            required />
                        <label htmlFor="amount"> Amount</label>
                    </div>

                    <div className="input__box">
                        <textarea
                            onChange={this.onNoteChange}
                            value={note}
                            name="note"
                            rows="6" 
                            placeholder="Add a note for your expense (optional)"
                        />
                    </div>

                    <div className="u--center bg-white u--medium">
                        <button className="btn btn--submit">Add</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default connect()(ExpenseForm);