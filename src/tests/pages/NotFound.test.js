import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../pages/NotFound';


test('should render NotFound page', ()=>{
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
    
})