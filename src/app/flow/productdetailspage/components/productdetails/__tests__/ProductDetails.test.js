import React from 'react';
import { shallow } from 'enzyme';
import ProductDetails from '../ProductDetails';
import { mockProductDetails } from '../__mocks__/productDetails.mock';

describe('Testing <ProductDetails />', () => {
    let props;
    window.scrollTo = jest.fn();
    beforeEach(() => {
        props = {
            id: '1',
            productDetails: mockProductDetails,
            isFetchingDetails: false,
            fetchProductDetails: jest.fn()
        }
    });
    it('should render the default view', () => {
        const wrapper = shallow(<ProductDetails {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('ProductImage').length).toEqual(1);
        expect(wrapper.find('ProductInfo').length).toEqual(1);
        wrapper.setProps({
            productDetails: null,
            isFetchingDetails: true
        });
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('ProductImage').length).toEqual(0);
        expect(wrapper.find('ProductInfo').length).toEqual(0);
        expect(wrapper.find('DetailsShimmer').length).toEqual(1);
    });
    it('should call fetchProductDetails on mount', () => {
        props.id = '2';
        const wrapper = shallow(<ProductDetails {...props} />);
        expect(props.fetchProductDetails).toHaveBeenCalledWith(props.id);
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });

});