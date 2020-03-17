import React from 'react';
import { shallow } from 'enzyme';
import ProductDetailsPage from '../';

describe('Testing <ProductDetailsPage />', () => {
    let props;
    beforeEach(() => {
        props = {
            history: {
                push: jest.fn()
            },
            match: {
                params: {
                    id: '1'
                }
            }
        }
    })
    it('should render the default view', () => {
        const wrapper = shallow(<ProductDetailsPage {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Connect(Header)').length).toEqual(1);
        expect(wrapper.find('Connect(ProductDetails)').length).toEqual(1);
        expect(wrapper.find('Footer').length).toEqual(1);
    });

});