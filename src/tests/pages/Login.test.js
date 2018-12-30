import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../pages/Login';

test('should render LoginPage correctly', ()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should startLogin on button click', ()=>{
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('button').simulate('click')
    expect(startLogin).toHaveBeenLastCalledWith()
})