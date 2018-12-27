import React from 'react';
import {shallow} from 'enzyme';
import numeral from 'numeral';
import expenses from '../fixtures/expenses'
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly',()=>{
    const wrapper = shallow(<ExpensesSummary expenses={[]}/>);

    expect(wrapper).toMatchSnapshot();
})

test('should render with no props expenses', ()=>{
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').at(0).text()).toBe("Viewing : 0");
    expect(wrapper.find('p').at(1).text()).toBe(`Totalling : ${numeral(0).format('$0,0.00')}`);
});

test('should render with expenses list', ()=>{
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    const total = expenses.reduce((accum, current)=>{
        return accum += current.amount
    },0)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').at(0).text()).toBe(`Viewing : ${expenses.length}`);
    expect(wrapper.find('p').at(1).text()).toBe(`Totalling : ${numeral(total).format('$0,0.00')}`);

})