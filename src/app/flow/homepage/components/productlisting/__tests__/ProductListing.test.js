import React from 'react';
import { shallow } from 'enzyme';
import ProductListing from '../ProductListing';
import { mockProductListingData } from '../__mocks__/productListing.mock';

describe('Testing <ProductListing />', () => {
    let props;
    window.scrollTo = jest.fn();
    beforeEach(() => {
        props = {
            productsList: mockProductListingData.productsList,
            nextPage: mockProductListingData.nextPage,
            isFetchingProducts: false,
            fetchProducts: jest.fn(),
            navigate: jest.fn()
        }
    });
    it('should render the default view', () => {
        const wrapper = shallow(<ProductListing {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('ProductListItem').length).toEqual(props.productsList.length);
        expect(wrapper.find('.products__more-btn').length).toEqual(1);
        wrapper.setProps({
            productsList: [],
            nextPage: 0,
            isFetchingProducts: true
        });
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('ProductListItem').length).toEqual(0);
        expect(wrapper.find('.product__no-more').length).toEqual(1);
        expect(wrapper.find('Shimmer').length).toEqual(1);
    });
    it('should fetchProducts on mount', () => {
        props.productsList = [];
        const wrapper = shallow(<ProductListing {...props} />);
        expect(props.fetchProducts).toHaveBeenCalledTimes(1);
        expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    });
    it('should trigger navigation', () => {
        const wrapper = shallow(<ProductListing {...props} />);
        const e = {
            currentTarget: {
                getAttribute: jest.fn((val) => '1')
            }
        };
        wrapper.find('ProductListItem').at(0).prop('navigate')(e);
        expect(props.navigate).toHaveBeenCalledWith(`/pdp/1`)
    });

});