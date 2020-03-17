import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Container from '../';
import { mockProductDetails } from '../__mocks__/productDetails.mock';

describe('Testing <ProductDetails /> Container', () => {
    const mockStore = configureStore();
    const productDetailsPageReducer = {
        productDetails:mockProductDetails,
        isFetchingDetails:false
    };

    it('should receive the following props', () => {
        let store = mockStore({ productDetailsPageReducer });
        const wrapper = shallow(<Container id="1" store={store} />);
        const { productDetails, isFetchingDetails } = productDetailsPageReducer;
        const childWrapper = wrapper.find('ProductDetails');
        expect(childWrapper.prop('id')).toEqual("1");
        expect(childWrapper.prop('productDetails')).toEqual(productDetails);
        expect(childWrapper.prop('isFetchingDetails')).toEqual(isFetchingDetails);
        expect(childWrapper.prop('fetchProductDetails')).toEqual(expect.any(Function));
    });
})
