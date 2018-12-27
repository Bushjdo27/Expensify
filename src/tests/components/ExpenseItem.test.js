import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseItem} from '../../components/ExpenseItem'
test('should render expense item with data', ()=>{
    const wrapper = shallow( <ExpenseItem {...expenses[0]} dispatch={()=> console.log('dispatch')}/>);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('p').text()).toBe(`Amount: ${expenses[0].amount}`);
    
})