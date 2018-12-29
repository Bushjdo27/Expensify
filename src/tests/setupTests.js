import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import DotENV from 'dotenv';

DotENV.config({path: '.env.test'});

Enzyme.configure({
    adapter: new Adapter()
})