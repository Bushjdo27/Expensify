import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount , sortByDate, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker} from 'react-dates'

export class ExpenseFilter extends React.Component {

    state = {
        calendarFocus: null,
    }

    onDateChange = ({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (calendarFocus)=>{
        this.setState(()=>({calendarFocus}))
    }
    onSelectChange = (e) => {
        if(e.target.value === 'date'){
            this.props.sortByDate()
        }else if(e.target.value === 'amount'){
            this.props.sortByAmount()
        }
    }
    onTextChange = (e)=>{
        const text = e.target.value;
        this.props.setTextFilter(text)
    }
    render(){
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                    />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSelectChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
    
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calendarFocus}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text)=> dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseFilter);