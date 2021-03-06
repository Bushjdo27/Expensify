import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';

test('Should handle render Header correctly', ()=>{

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot()
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should startLogOut on button click ', ()=>{
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header startLogOut={startLogOut}/>)
    wrapper.find('button').simulate('click');

    expect(startLogOut).toHaveBeenLastCalledWith();
})