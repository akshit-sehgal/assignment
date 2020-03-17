import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Testing <App />', () => {

    it('should render the default view', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('BrowserRouter').length).toEqual(1);
        const routesWrapper = wrapper.find('Routes');
        expect(routesWrapper).toMatchSnapshot();
        expect(routesWrapper.length).toEqual(1);
        expect(routesWrapper.dive().find('Route').length).toEqual(2);        
    });

});