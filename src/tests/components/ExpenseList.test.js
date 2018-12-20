import React from 'react'
import { ExpensesListItem} from '../../components/ExpensesListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render expense list with item' , ()=>{
    const wrapper = shallow(<ExpensesListItem expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();

});

test('should render Expense List with empty message', ()=>{
    const wrapper = shallow(<ExpensesListItem expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('No Expense');
})