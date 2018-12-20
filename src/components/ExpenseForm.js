import React, {Component} from 'react';
//import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'

class ExpenseForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            err: false
        }
    }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>{
            return {
                description
            }
        })
    }

    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        this.setState(()=>({createdAt}))
    }
    onFocusChange = ({focused}) =>{
        this.setState(()=>({calendarFocused: focused}))
    }

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const {description, amount, note,createdAt} = this.state;
        if(description && amount){
            this.setState(()=>({err: false}))
            if(this.props.edit){
                this.props.onSubmit({
                    description,
                    amount: parseFloat(amount),
                    note,
                    createdAt: createdAt.valueOf()
                })
            }else{
                this.props.onSubmit({
                    id: "3",
                    description,
                    amount: parseFloat(amount),
                    note,
                    createdAt: createdAt.valueOf()
                })
            }
            
            
        }else {
            this.setState(()=>({err: true}))
        }
        
    }
    render(){
        const {description , amount , note, createdAt,calendarFocused,err} = this.state;
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
                            type="text" 
                            id="amount" 
                            name="amount" 
                            required />
                        <label htmlFor="amount"> Amount</label>
                    </div>
                    <div className="input__box">
                        <SingleDatePicker 
                            date={createdAt}
                            onDateChange={this.onDateChange}
                            focused={calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={()=>false}
                        />
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
                        {err && <p>Please enter description, amount for your expense</p>}
                        <button className="btn btn--submit">{this.props.edit ? 'Edit' : 'Add'}</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}


//export default connect()(ExpenseForm);
export default ExpenseForm;