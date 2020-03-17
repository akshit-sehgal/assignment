import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Container from '../';
import { mockProductListingData } from '../__mocks__/productListing.mock';

describe('Testing <ProductListing /> Container', () => {
    const mockStore = configureStore();
    const homePageReducer = {
        productsList:mockProductListingData.productsList,
        isFetchingProducts:false,
        nextPage:mockProductListingData.nextPage
    };

    it('should receive the following props', () => {
        let store = mockStore({ homePageReducer });
        const wrapper = shallow(<Container store={store} />);
        const { productsList, isFetchingProducts, nextPage } = homePageReducer;
        const childWrapper = wrapper.find('ProductListing');
        expect(childWrapper.prop('productsList')).toEqual(productsList);
        expect(childWrapper.prop('isFetchingProducts')).toEqual(isFetchingProducts);
        expect(childWrapper.prop('nextPage')).toEqual(nextPage);
        expect(childWrapper.prop('fetchProducts')).toEqual(expect.any(Function));
    });
})
