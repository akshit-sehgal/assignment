import React from 'react';
import { shallow } from 'enzyme';
import ProductInfo from '../ProductInfo';
import { mockProductDetails } from '../__mocks__/productDetails.mock';

describe('Testing <ProductImage />', () => {
    let props;
    beforeEach(() => {
        props = {
            rating: mockProductDetails.rating,
            name: mockProductDetails.name,
            price: mockProductDetails.price,
            description: mockProductDetails.description
        }
    })
    it('should render the default view', () => {
        const wrapper = shallow(<ProductInfo {...props} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.pf__table-row').length).toEqual(4);
        expect(wrapper.find('.pd__rating').length).toEqual(1);
        expect(wrapper.find('.pd__desc').length).toEqual(1);
        const StarRattingWrapper = wrapper.find('StarRating').dive();
        expect(StarRattingWrapper.find('.material-icons').length).toEqual(props.rating);
        expect(StarRattingWrapper).toMatchSnapshot();
    });

});