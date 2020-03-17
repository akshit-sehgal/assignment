import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../';

describe('Testing <HomePage />', () => {
    let props;
    beforeEach(() => {
        props = {
            history: {
                push: jest.fn()
            }
        }
    })
    it('should render the default view', () => {
        const wrapper = shallow(<HomePage {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Connect(Header)').length).toEqual(1);
        expect(wrapper.find('Connect(CarouselHolder)').length).toEqual(1);
        expect(wrapper.find('Connect(ProductListing)').length).toEqual(1);
        expect(wrapper.find('Footer').length).toEqual(1);
    });

});